import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {   
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true
        },
        cep:{
            type: String,
            required: true
        },
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            required: true
        },
        points: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)