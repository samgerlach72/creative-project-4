const express = require('express');
const bodyParser = require("body-parser");
const crypto = require("node:crypto");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

let products = [];
let cart = [];
let id = 0;

//Cart
app.get('/api/cart', (req, res) => {
  console.log("In cart get");
  res.send(cart);
});

app.post('/api/cart/:id', (req, res) => {
  console.log("In cart post");
  id = req.params.id;
  const foundItem = cart.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity += 1;
    res.send(foundItem);
  }
  else{
    let item = {
      id: id,
      quantity: 1
    };
    cart.push(item);
    res.send(item);
  }
});

// app.put('/api/cart/:id/:quantity', (req, res) => {
//   console.log("In cart put");
//   let quantity = parseInt(req.params.quantity);
//   id = req.params.id;
//   const foundItem = cart.find(item => item.id == id);
//   if(foundItem && quantity === 0){
//     cart.splice(foundItem, 1);
//     res.send(foundItem);
//     res.sendStatus(200);
//     return;
//   }
//   if(foundItem){
//     foundItem.quantity = quantity;
//     res.send(foundItem);
//     res.sendStatus(200);
//     return;
//   }
//   res.status(404);
//   console.log("Sorry that item does not exist");
// });


app.put('/api/cart/:id/:quantity', (req, res) => {
  console.log("In cart put");
  let quantity = parseInt(req.params.quantity);
  id = req.params.id;
  const foundItem = cart.find(item => item.id == id);
  if(!foundItem){
    res.status(404);
    console.log("Sorry that item does not exist");
    return;
  }
  foundItem.quantity = quantity;
  if(quantity === 0){
    let removeIndex = cart.map(item => {
      return item.id;
    }).indexOf(id);
    cart.splice(removeIndex, 1);
  }
  res.send(foundItem);
});

app.delete('/api/cart/:id', (req, res) => {
  console.log("In cart delete");
  id = req.params.id;
  let removeIndex = cart.map(item => {
      return item.id;
    }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404);
    return;
  }
  cart.splice(removeIndex, 1);
  res.sendStatus(200);
});


//products
app.get('/api/products', (req, res) => {
  console.log("In get");
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  console.log("In get");
  console.log(req.params);
  id = req.params.id;
  let getIndex = products.map(product => {
      return product.id;
    }).indexOf(id);
  if (getIndex === -1) {
    res.status(404)
    return;
  }
  res.send(products[getIndex]);
  res.sendStatus(200);
});

app.post('/api/products', (req, res) => {
  console.log("In post");
  id = crypto.randomUUID();
  let product = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.send(product);
});

app.delete('/api/products/:id', (req, res) => {
  console.log("In delete");
  id = req.params.id;
  let removeIndex = products.map(product => {
      return product.id;
    }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404);
    return;
  }
  products.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));