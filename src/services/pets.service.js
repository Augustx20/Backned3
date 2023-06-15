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
    //obtener datos
    async getAllPets(){
        const Pets = await UserModelPets.find({});
        return Pets
        }

    async createPets(firstName , edad, raza){
            this.validateUserPostPets(firstName , edad, raza) // se auto valida para poder confirmar si estan hechas las validaciones
            const petsCreated = await UserModelPets.create({ firstName , edad, raza});
            return petsCreated
        }

}
export const petsService = new PetsService()