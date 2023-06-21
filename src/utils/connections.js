
import { connect } from "mongoose";
import { UserModel } from "../DAO/models/users.model.js";
import { StudentsModel } from "../DAO/models/students.model.js";
import { CoursesModel } from "../DAO/models/courses.model.js";
//import { faker } from '@faker-js/faker';

export async function connectMongo(){
  try {
    await connect(
      "mongodb+srv://augus1726:diXbIUoo4Ut9mo73@codercluster.oeptjle.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("plug to mongo!");



    // console.log(JSON.stringify(student, null, 2))


    // let students = await StudentsModel.findOne({_id:'648e27bd464dc72142471291'});
    // students.courses.push({course: '648e2941190bb22e37dd3349'});
    // let res = await StudentsModel.updateOne({_id: '648e27bd464dc72142471291'}, students)

    // const created = await CoursesModel.create({
    //   title: 'fronted',
    //   description: 'wonderfull backend courses',
    //   dificulty: 10,
    //   professor:'guille'
    // })

    //const created = StudentsModel.create({
    //   first_name: 'Julian',
    //   last_name: 'Barberis',
    //   email: 'juli@gmail.com',
    //   gender: 'masculino',
    //   courses:[]
    // })

    // let res = await UserModel.find({firstName: 'John'}).explain('executionStats');
    // console.log(res)

    // (async () => {
    //   const users = [];
    //   for (let i = 0; i < 7000; i++) {
    //     users.push({
    //       firstName:faker.internet.userName(),
    //       lastName: faker.internet.userName(),
    //       email: faker.internet.email()
    //     })
    //     try {
    //       await UserModel.insertMany(users);
    //       console.log('inserted', users.length, 'users')
          
    //     } catch (e) {
    //       console.error("Error en insert many: ",e)
          
    //     }
    //   }
    //})();
    
  } catch (e) {
    console.log(e);
    throw "can not connect to the db";
  }
  
}