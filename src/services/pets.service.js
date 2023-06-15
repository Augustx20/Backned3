import { UserModelPets} from "../DAO/models/pets.model.js";


class PetsService{
    validateUserPostPets(firstName,edad,raza){
        if (!firstName || !edad || !raza) {
            console.log(
                "validation error: plase complete firstname, pets and edad "
            )
            throw "validation error"
        }
    }
validatePetsId(id){
    if (!id) {
            console.log(
                "validation error: plase complete firstname, lastname and email"
        )
        throw "validation error"
    }}


    //obtener datos
    async getAllPets(){
        const Pets = await UserModelPets.find({});
        return Pets
        }
    //pushear datos
    async createPets(firstName , edad, raza){
            this.validateUserPostPets(firstName , edad, raza) // se auto valida para poder confirmar si estan hechas las validaciones
            const petsCreated = await UserModelPets.create({ firstName , edad, raza});
            return petsCreated
        }
    async UpadatePets(id,firstName , edad, raza){
            this.validatePetsId(id,firstName , edad, raza)
            const petsUpdated = await UserModelPets.updateOne({ _id: id},{ firstName , edad, raza})
            return petsUpdated
    }

    async deletePets(id){
        this.validatePetsId(id)
        const deleted = await UserModelPets.deleteOne({ _id: id});
        return deleted
    }

}
export const petsService = new PetsService()