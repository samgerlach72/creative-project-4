import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

const Cart = () => {
  // setup state
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [quantity, setQuantity] = useState("");

  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setItems(response.data.cart);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  const deleteOneItem = async(product) => {
    try {
      await axios.delete("/api/cart/" + product._id);
    } catch(error) {
      setError("error deleting a product" + error);
    }
  }
  const decrementCart = async(product) => {
    try {
      product.quantity--;
      await axios.put("/api/cart/" + product._id + "/" + product.quantity);
    } catch(error) {
      setError("error decrementing the cart" + error);
    }
  }
  const decrementInCart = async(product) => {
    await decrementCart(product);
    fetchCart();
  }
  const incrementCart = async(product) => {
    try {
      product.quantity++;
      await axios.put("/api/cart/" + product._id + "/" + product.quantity);
    } catch(error) {
      setError("error decrementing the cart" + error);
    }
  }
  const incrementInCart = async(product) => {
    await incrementCart(product);
    fetchCart();
  }
  // fetch product data
  useEffect(() => {
    fetchCart();
  },[]);

  const deleteProduct = async(item) => {
    await deleteOneItem(item);
    fetchCart();
  }

  // render results
  return (
    <div className="App">
      {error}
      <div className = "page">
      <h1 className = "page-title">Cart</h1>
      {items.map( product => (
        <div key={product._id} className="text-and-image switch">
          <div className="text">
            <h2>{product.name}</h2>
            <p className="intro">Price: {product.price}</p>
            <p className="intro">Quantity: {product.quantity}<br/></p>
            <button className="small-button" onClick={e => deleteProduct(product)}>Delete</button>
            <button className="small-button" onClick={e => decrementInCart(product)}>  -  </button>
            <button className="small-button" onClick={e => incrementInCart(product)}>  +  </button>
          </div>
            <div className = 'image-container'><img src ={product.photo} className="small-photo"/></div>
          </div>
      ))}  
      <Link to="/checkout" className="big-button"><button className="checkout-button">Checkout</button></Link>
      </div>
    </div>
  );
};

export default Cart;