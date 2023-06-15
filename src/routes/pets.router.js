
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
            msg: "pets created ",
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

// routerPets.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   pets = pets.filter((p) => p.id != id);

//   return res.status(200).json({
//     status: "success",
//     msg: "filtramos los pets cuyo id es " + id,
//     data: {},
//   });
// });

// routerPets.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const datosNuevos = req.body;
//   const indice = pets.findIndex((p) => p.id == id);
//   if (indice == -1) {
//     return res.status(404).json({
//       status: "error",
//       msg: "error ya que este pet no existe",
//       data: {},
//     });
//   } else {
//     pets[indice] = { ...datosNuevos, id: pets[indice].id };
//     return res.status(201).json({
//       status: "success",
//       msg: "pet modificado ok",
//       data: pets[indice],
//     });
//   }
// });


