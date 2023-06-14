import { Schema, model } from "mongoose";


export const UserModel = model(
    "users", //nombre de collection donde se va  hacer el CRUD
    new Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},

    })
)