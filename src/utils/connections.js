import { connect } from "mongoose";

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