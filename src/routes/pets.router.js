
import express from "express";
import { petsService } from "../services/pets.service.js";
export const routerPets = express.Router();


routerPets.get("/", async (req, res) => {
  try {
    const pets = await petsService.getAllPets()
    return res.status(200).json({
        status: "success",
        msg: "listado de perros",
        data: pets,

    })
 } catch (e) {
    console.log(e);
    return res.status(500).json({
        status: "error",
        msg: "somenthin went wrong :{",
        data: {},
    })
 }
});
routerPets.post("/", async (req, res) => {
    try {
        const {firstName, edad, raza} = req.body;
        const petsCreated = await petsService.createPets( firstName , edad, raza);

        //responde al usuario con exito
        return res.status(201).json({
            status: "success",
            msg: "pets created, awesome ",
            data: petsCreated,
        });
        
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: "error",
            msg: "something went wrong :(",
            data: {},
        })
        
    }
  });

routerPets.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {firstName, edad, raza} = req.body
        const petsUpdated = await petsService.UpadatePets(id,firstName,edad,raza)
            //responde al usuario con exito
            return res.status(201).json({
                status: "success",
                msg: "pets updated, awesome",
                data: petsUpdated,
            })
            
        } catch (e) {
            //Logger
            console.log(e);
            //responde al usuario con error
            return res.status(500).json({
                status: "error",
                msg: "something went wrong :(",
                data: {},
            })
            
        }
});


routerPets.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await petsService.deletePets(id)

        //responde al usuario con exito
        return res.status(200).json({
            status: "success",
            msg: "user deleted",
            data: deleted,
        })
    } catch (e) {
        //Logger
        console.log(e);
        //responde al usuario con error
        return res.status(500).json({
            status: "error",
            msg: "something went wrong :(",
            data: {},
        })
        
    }
});




