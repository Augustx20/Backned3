
import { connect } from "mongoose";
import { UserModel } from "../DAO/models/users.model.js";
import { StudentsModel } from "../DAO/models/students.model.js";
import { CoursesModel } from "../DAO/models/courses.model.js";
import { categoriesModel } from "../DAO/models/categories.model.js";

export async function connectMongo(){
  try {
    await connect(
      "mongodb+srv://augus1726:diXbIUoo4Ut9mo73@codercluster.oeptjle.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("plug to mongo!");
    
  } catch (e) {
    console.log(e);
    throw "can not connect to the db";
  }
  
}


import path from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(path.dirname(__filename));
export const apiProductsPath = __dirname + '/api/products.json'
export const apiCartsPath = __dirname + '/api/carts.json'