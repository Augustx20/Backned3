//@ts-check
import express from "express";
import handlebars from "express-handlebars";
import { routerPets } from "./routes/pets.router.js";
//import { routerProductos } from "./routes/productos.router.js";
// { routerVistaProductos } from "./routes/productos.vistas.router.js";
import { routerVistaChatSocket } from "./routes/chat-socket.vista.router.js";
import { __dirname } from "./path.js";
import { Server } from "socket.io"; 
import { routerUsers } from "./routes/users.router.js";
import { connectMongo } from "./utils/connections.js";


//mongodb+srv://augus1726:diXbIUoo4Ut9mo73@codercluster.oeptjle.mongodb.net/?retryWrites=true&w=majority



const port = 3010;
const app = express();


connectMongo()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//CONFIGURACION DEL MOTOR DE HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//archivos publicos
app.use(express.static(__dirname + "/public"));
//ENDPOINT TIPO API CON DATOS CRUDOS EN JSON
//app.use("/api/productos", routerProductos);
app.use("/api/pets", routerPets);
app.use("/api/users", routerUsers );

//HTML REAL TIPO VISTA
//pp.use("/vista/productos", routerVistaProductos);

app.use("/vista/chat-socket", routerVistaChatSocket);

app.get("*", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "error esa ruta no existe",
    data: {},
  });
})

const httpServer = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const socketServer = new Server(httpServer)

socketServer.on('connection',socket=>{
  console.log("nuevo cliente conectado")
})


let msgs = [];
socketServer.on("connection", (socket) => {
  socket.on("msg_front_to_back", (msg) => {
    msgs.push(msg);
    console.log(msgs);
    socketServer.emit("todos_los_msgs", msgs);
  });

});

