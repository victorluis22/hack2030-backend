import Jwt from "jsonwebtoken";

import User from "../models/user.js";
import { checkPassword } from "../services/auth.js";
import authConfig from '../config/auth.js'

class sessionControler{
    async create(req, res){
        const { email, password } = req.body;
        const user = await User.findOne({ email })

        if(!user){
            return res.status(401).json({error: "User / password invalid."})
        }

        if(!await checkPassword(user, password)){
            return res.status(401).json({error: "User / password invalid."})
        }

        const { id, name } = user

        return res.json({
            user: {
                id,
                email,
                name,
            },
            token: Jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

export default new sessionControler()