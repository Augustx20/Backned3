import mongoose, { Schema, model } from "mongoose";
import moongoosePaginate from 'mongoose-paginate-v2'

const UsersCollection = 'users';

const usersSchema = mongoose.Schema({
    firstName: {type: String, required: true,index:true},
    lastName: {type: String, required: true,index:true},
    email: {type: String, required: true},
})

usersSchema.plugin(moongoosePaginate)
export const UserModel = mongoose.model(UsersCollection,usersSchema)
