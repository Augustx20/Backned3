import { Schema, model } from "mongoose";


export const UserModel = model(
    "users", //nombre de collection donde se va  hacer el CRUD
    new Schema({
        firstName: {type: String, required: true, max: 100},
        lastName: {type: String, required: true, max: 100},
        email: {type: String, required: true, max: 100},

    })
)