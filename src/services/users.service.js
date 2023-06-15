
import { UserModel } from "../DAO/models/users.model.js";

class UserService{
validateUserPostUsers(firstName,lastName,email){
    if (!firstName || !lastName || !email) {
        console.log(
            "validation error: plase complete firstname, lastname and email POST"
        )
        throw "validation error"
    }
}
validateUserPutUsers(id,firstName , lastName, email){
    if (!firstName || !lastName || !email || !id) {
        console.log(
            "validation error: plase complete firstname, lastname and email"
        )
        throw "validation error"
    }

}
validateUserId(id){
    if (!id) {
        console.log(
            "validation error: plase complete firstname, lastname and email"
        )
        throw "validation error"
    }}
   async getAllUsers(){
    const Users = await UserModel.find({});
    return Users
    }

    async createUser(firstName , lastName, email){
        this.validateUserPostUsers(firstName , lastName, email) // se auto valida para poder confirmar si estan hechas las validaciones
        const userCreated = await UserModel.create({ firstName , lastName, email});
        return userCreated
    }

    async UpadateUser(id,firstName , lastName, email){
        this.validateUserPutUsers(id,firstName , lastName, email)
        const userUpdated = await UserModel.updateOne({ _id: id},{ firstName, lastName, email})
        return userUpdated
    }
    async deleteUser(id){
        this.validateUserId(id)
        const deleted = await UserModel.deleteOne({ _id: id});
        return deleted
    }
}



export const userService = new UserService()