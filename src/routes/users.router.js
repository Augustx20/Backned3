//@ts-check

import express from "express";
import { UserModel } from "../models/users.model.js";
export const routerUsers = express.Router();

routerUsers.get("/", async (req, res) => {
 try {
    const Users = await UserModel.find({});
    return res.status(200).json({
        status: "success",
        msg: "listado de usuarios",
        data: Users,

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
    const {firstName, lastName, email} = req.body;
    try {
        if (!firstName || !lastName || !email) {
            console.log(
                "validation error: plase complete firstname, lastname and email POST"
            );

            //retorna si es error
            return res.status(400).json({
                status: "error",
                msg: "please complete firstname, lastname and email",
                data: {},
            });
        }
        //crea los usuarios y espera a que lo hagan
        const userCreated = await UserModel.create({ firstName , lastName, email});

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
    const {id} = req.params;
    const {firstName, lastName, email} = req.body
    try {
        // VALIDACIONES
        if (!firstName || !lastName || !email || !id) {
            console.log(
                "validation error: plase complete firstname, lastname and email"
            );

            //retorna si es error
            return res.status(400).json({
                status: "error",
                msg: "please complete firstname, lastname and email",
                data: {},
            });
        }
        //crea los usuarios y espera a que lo hagan
        const userUpdated = await UserModel.updateOne(
            { _id: id},
            { firstName, lastName, email}
        )

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
        const deleted = await UserModel.deleteOne({ _id: id});
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