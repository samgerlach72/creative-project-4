import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

const Book = () => {
  // setup state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  };
  const createProduct = async() => {
    try {
      await axios.post("/api/products", {name: name, description: description, price: price, photo: photo});
    } catch(error) {
      setError("error adding a product: " + error);
    }
  };
  const deleteOneProduct = async(product) => {
    try {
      await axios.delete("/api/products/" + product._id);
    } catch(error) {
      setError("error deleting a product" + error);
    }
  };

  // fetch product data
  useEffect(() => {
    fetchProducts();
  },[]);

  const addProduct = async(e) => {
    e.preventDefault();
    await createProduct();
    fetchProducts();
    setName("");
    setDescription("");
    setPrice("");
    setPhoto("");
  };

  const deleteProduct = async(product) => {
    await deleteOneProduct(product);
    fetchProducts();
  };
  
  
  //Cart
  const addProductToCart = async(product) => {
    try {
      await axios.post("/api/cart/"+ product._id);
    } catch(error) {
      setError("error adding product to cart." + error);
    }
  };
  const addToCart = async(product) => {
    await addProductToCart(product);
  };
  
      //   <h1>Create a Product</h1>
      // <form onSubmit={addProduct}>
      //   <div>
      //     <label>
      //       Name:
      //       <input type="text" value={name} onChange={e => setName(e.target.value)} />
      //     </label>
      //   </div>
      //   <div>
      //     <label>
      //       Description:
      //       <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      //     </label>
      //   </div>
      //   <div>
      //     <label>
      //       Price:
      //       <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      //     </label>
      //   </div>
      //   <div>
      //     <label>
      //       Photo:
      //       <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} />
      //     </label>
      //   </div>
      //   <input type="submit" value="Submit" />
      // </form>
  
  // render results
  return (
    <div className="App">
      {error}
      <div className = "page">
      <h1 className = "page-title">Products</h1>
      {products.map( product => (
        <div key={product._id} className="text-and-image switch">
          <div className="text">
            <h2>{product.name}</h2>
            <p className="intro">{product.description}</p>
            <p className="intro">Price: {product.price}<br/></p>
            <button onClick={e => addToCart(product)}>Add to Cart</button>
          </div>
          <div className = 'image-container'><img src ={product.photo} className="small-photo"/></div>
        </div>
      ))} 
      <Link to="/cart" className="big-button"><button className="checkout-button">Proceed to Cart</button></Link>
    </div>
    </div>
  );
};

export default Book;