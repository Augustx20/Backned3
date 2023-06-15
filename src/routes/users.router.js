//@ts-check
import express from "express";
import { userService } from "../services/users.service.js";
export const routerUsers = express.Router();


routerUsers.get("/", async (req, res) => {
 try {
    const users = await userService.getAllUsers()
    return res.status(200).json({
        status: "success",
        msg: "listado de usuarios",
        data: users,

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

routerUsers.post('/', async (req,res)=>{
    try {
        const {firstName, lastName, email} = req.body;
        const userCreated = await userService.createUser( firstName , lastName, email);

        //responde al usuario con exito
        return res.status(201).json({
            status: "success",
            msg: "user created ",
            data: userCreated,
        });
        
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: "error",
            msg: "something went wrong :(",
            data: {},
        })
        
    }
})

//ACTUALIZACION Y VALIDACION DE DATOS
routerUsers.put("/:id", async (req,res)=>{
    try {
    const { id } = req.params;
    const {firstName, lastName, email} = req.body
    const userUpdated = await userService.UpadateUser(id,firstName,lastName,email)
        //responde al usuario con exito
        return res.status(201).json({
            status: "success",
            msg: "user created, awesome",
            data: userUpdated,
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
})


routerUsers.delete("/:id", async (req,res)=>{
    
    try {
        const {id} = req.params;
        const deleted = await userService.deleteUser(id)

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
})