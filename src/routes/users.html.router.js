import express from "express";
import { UserModel } from "../DAO/models/users.model.js";



export const usersHtmlRouter = express.Router();

usersHtmlRouter.get('/', async (req,res)=>{
    const { page } = req.query;
    console.log(page)
    let users = await UserModel.paginate({}, {limit: 5, page: page || 1 })
    let usuarios = users.docs.map((user) =>{
        return{
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    });

    return res.status(200).render('usuarios', {usuarios: usuarios, 
        totalPages:  users.totalPages, 
        page: users.page, 
        pagingCounter: users.pagingCounter, 
        hasPrevPage: users.hasPrevPage, 
        hasNextPage: users.hasNextPage, 
        prevPage: users.prevPage, 
        nextPage: users.nextPage,
       }) //, pagination: rest, links

})