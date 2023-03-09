import User from '../models/user.js'

import { createPasswordHash } from '../services/auth.js'

class userController {
    async index(req, res) {
        try {
            const users = await User.find().sort({points: -1})
            return res.json(users)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async show(req, res) {
        try {
            const { id }= req.params
            
            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }

            return res.json(user)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async create(req, res) {
        try {
            const { name, email, password, address, cep, lat, lon, points } = req.body
            const user = await User.findOne({ email })

            if(user){
                return res.status(422).json({message: `User ${email} already exists.`})
            }

            const encryptedPassword = await createPasswordHash(password)

            const newUser = await User.create({  name, email, password: encryptedPassword, address, cep, lat, lon, points})

            return res.status(201).json(newUser)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async updatePoints(req, res) {
        try {
            const { id } = req.params
            const { points } = req.body

            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }

            await user.updateOne({points})

            return res.status(200).json()
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params
            const user = await User.findById(id)

            if(!user){
                return res.status(404).json()
            }

            user.deleteOne()

            return res.status(200).json()
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }
}

export default new userController()