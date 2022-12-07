const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/products', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//products
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  photo: String,
  quantity: Number
});

// productSchema.virtual('id')
//   .get(function() {
//     return this._id.toHexString();
//   });
  
productSchema.set('toJSON', {
  virtuals: true
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  console.log("In Products Get");
  try {
    let products = await Product.find();
    res.send({products: products});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/products', async (req, res) => {
    console.log("In Products POST");
    const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    photo: req.body.photo,
    quantity: 0
  });
  try {
    await product.save();
    res.send({product:product});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/products/:_id', async (req, res) => {
  console.log("In Products Delete");
  try {
    await Product.deleteOne({
      _id: req.params._id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});





//Cart
// const cartSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: String,
//   photo: String,
//   id: String,
//   quantity: Number
// });

// cartSchema.set('toJSON', {
//   virtuals: true
// });

// const Cart = mongoose.model('Cart', cartSchema);

app.get('/api/cart', async (req, res) => {
  console.log("In Cart Get");
  try {
    let cart = await Product.find({quantity: {$gt:0}});
    res.send({cart:cart});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/cart/:_id', async (req, res) => {
  console.log("In Cart POST");
  try {
    const filter = { _id: req.params._id };
    const update = { $inc: {quantity: 1} };
    // const foundItem = await Product.findOne({id: req.params.id});
    // let quantity = parseInt(foundItem.quantity) + 1;
    console.log(req.params._id);
    const cart = await Product.findOne(filter);
    cart.quantity += 1;
    cart.save();
    res.send({cart:cart});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/cart/:_id/:quantity', async (req, res) => {
  console.log("In cart put");
  try {
    const quantity = req.params.quantity;
    const cart = await Product.findOneAndUpdate({_id: req.params._id}, { $set: {quantity: quantity} });
    res.send({cart:cart});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/cart/:_id', async (req, res) => {
  console.log("In Cart Delete");
  try {
    const cart = await Product.findOneAndUpdate({_id: req.params._id}, { $set: {quantity: 0} });
    res.send({cart:cart});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
  