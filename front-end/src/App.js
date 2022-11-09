import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");


  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  // const createProduct = async() => {
  //   try {
  //     await axios.post("/api/products", {name: name, price: price});
  //   } catch(error) {
  //     setError("error adding a product: " + error);
  //   }
  // }
  // const addProduct = async(e) => {
  //   e.preventDefault();
  //   await createProduct();
  //   fetchProducts();
  //   setName("");
  //   setPrice("");
  // }
  useEffect(() => {
    fetchProducts();
  },[]);
  
  
  const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  const addCart = async(product) => {
    try {
      await axios.post("/api/cart/" + product.id);
    } catch(error) {
      setError("error adding to cart" + error);
    }
  }
  const addToCart = async(product) => {
    await addCart(product);
    fetchCart();
  }
  const decrementCart = async(product) => {
    try {
      product.quantity--;
      await axios.put("/api/cart/" + product.id + "/" + product.quantity);
    } catch(error) {
      setError("error decrementing the cart" + error);
    }
  }
  const decrementInCart = async(product) => {
    await decrementCart(product);
    fetchCart();
  }
  const removeCart = async(product) => {
    try {
      await axios.delete("/api/cart/" + product.id);
    } catch(error) {
      setError("error removing from cart" + error);
    }
  }
  const removeFromCart = async(product) => {
    await removeCart(product);
    fetchCart();
  }
  useEffect(() => {
    fetchCart();
  },[]);
  
  
  // function isID(){
    
  // }
  // function getName(item){
  //   const result = products.filter((products) => {
  //     if(item.id == products.id)
  //       return products.name;
  //     });
  //   console.log(result);
  //   return result.name;
  // }
  
  // render results
  return (
    <div className="App">
      {error}
      <div className="half">
      <h1>Products</h1>
      {products.map( product => (
        <div key={product.id} className="product">
            {product.name}, {product.price}
          <button onClick={e => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
      </div>
      
      <div className="half">
      <h1>Cart</h1>
      {cart.map( item => (
        <div key={item.id} className="product">
            {products.find(products => item.id === products.id).name}, {item.quantity}
          <button onClick={e => decrementInCart(item)}>-</button>
          <button onClick={e => addToCart(item)}>+</button>
          <button onClick={e => removeFromCart(item)}>Remove from cart</button>
        </div>
      ))} 
      </div>
    </div>
  );
}

export default App;
