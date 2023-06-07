import express from "express";
import { productos } from "../utils.js";

export const routerVistaProductos = express.Router();
routerVistaProductos.get("/", (req, res) => {
  return res.render("productos-html", {
    titulo: "TITULO: PRODUCTOS",
    productos: productos,
    dolar: 500 + Math.floor(Math.random() * 100),
  });
  //   return res.send("chau");
  /* return res.status(200).json({
    status: "success",
    msg: "te paso todos los productos",
    data: productos,
  }); */
});
