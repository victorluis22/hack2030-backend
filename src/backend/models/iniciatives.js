import mongoose from "mongoose";


const iniciativesSchema = new mongoose.Schema(
    {   
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        emailOwner: {
            type: String,
            required: true
        },
        actingArea: {
            type: String,
            required: true
        },
        impact: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        mainOds: {
            type: Number,
            required: true
        },
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Iniciatives', iniciativesSchema)