

const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
app.use(express.json());

app.get('/carts', (req, res) => {
    const carts = getCarts();
    res.json(carts);
  });
  
  function getCarts() {
    const filePath = path.join(__dirname, 'data', 'carts.json');
    const cartsData = fs.readFileSync(filePath, 'utf-8');
    const carts = JSON.parse(cartsData);
    return carts;
  }  

// Punto 1: Mostrar la lista de productos al acceder a la ruta "/api/products" utilizando el método GET
app.get('/api/products', (req, res) => {
  const fileData = fs.readFileSync('products.json', 'utf-8');
  const products = JSON.parse(fileData);
  const formattedProducts = JSON.stringify(products, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.send(formattedProducts);
});

// Punto 2: Mostrar la lista de carritos al acceder a la ruta "/api/carts" utilizando el método GET
app.get('/api/carts', (req, res) => {
  const fileData = fs.readFileSync('carts.json', 'utf-8');
  const carts = JSON.parse(fileData);
  res.json(carts);
});


// Punto 3: Agregar un nuevo producto al carrito utilizando el método POST
app.post('/api/carts', (req, res) => {
  const { productId } = req.body;

  // Realizar la lógica para agregar el producto al carrito

  res.json({ message: 'Producto agregado al carrito' });
});

// Punto 4: Actualizar la cantidad de un producto en el carrito utilizando el método PUT
app.put('/api/carts/:cartId/items/:itemId', (req, res) => {
  const { cartId, itemId } = req.params;
  const { quantity } = req.body;

  // Realizar la lógica para actualizar la cantidad del producto en el carrito

  res.json({ message: 'Cantidad de producto actualizada' });
});

// Punto 5: Eliminar un producto del carrito utilizando el método DELETE
app.delete('/api/carts/:cartId/items/:itemId', (req, res) => {
  const { cartId, itemId } = req.params;

  // Realizar la lógica para eliminar el producto del carrito

  res.json({ message: 'Producto eliminado del carrito' });
});

// Punto 6: Obtener información detallada de un carrito utilizando el método GET
app.get('/api/carts/:cartId', (req, res) => {
  const { cartId } = req.params;

  // Realizar la lógica para obtener información detallada del carrito

  res.json({ cartId, message: 'Información detallada del carrito' });
});

// Punto 7: Realizar la compra del carrito utilizando el método POST
app.post('/api/carts/:cartId/checkout', (req, res) => {
  const { cartId } = req.params;

  // Realizar la lógica para realizar la compra del carrito

  res.json({ cartId, message: 'Compra realizada' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
