import { Schema, model } from "mongoose";


export const UserModelPets = model(
    "pets", //nombre de collection donde se va  hacer el CRUD
    new Schema({
        firstName: {type: String, required: true},
        edad: {type: String, required: true},
        raza: {type: String, required: true},

    })
)