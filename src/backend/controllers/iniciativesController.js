import Iniciatives from '../models/iniciatives.js';

class iniciativesController {
    async list(req, res) {
        try {
            const iniciatives = await Iniciatives.find().sort({points: -1})
            return res.json(iniciatives)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async show(req, res) {
        try {
            const { id }= req.params
            
            const iniciative = await Iniciatives.findById(id)

            if(!iniciative){
                return res.status(404).json()
            }

            return res.json(iniciative)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async create(req, res) {
        try {
            const { name, owner, address, cep, emailOwner, actingArea, impact, type, points, mainOds, lat, lon } = req.body
            const iniciative = await Iniciatives.findOne({ name, emailOwner })

            if(iniciative){
                return res.status(422).json({message: `Iniciative ${name} already exists.`})
            }

            const newIniciative = await Iniciatives.create({  
                name, owner, address, cep, emailOwner, actingArea, impact, type,
                points, mainOds, lat, lon
            })

            return res.status(201).json(newIniciative)
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params
            const iniciative = await Iniciatives.findById(id)

            if(!iniciative){
                return res.status(404).json()
            }

            iniciative.deleteOne()

            return res.status(200).json()
        } catch (error) {
            console.error(error);
            return res.status(500).json({error: "Internal server error."})
        }
    }
}

export default new iniciativesController()