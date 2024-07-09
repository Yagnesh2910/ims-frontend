import React, {useState} from 'react'
import Layout from '../components/Layout'
import "../styles/Add.css"
import axios from "axios";


function Add() {
  const[code, setCode] = useState();
  const[name, setName] = useState();
  const[quantity, setQuantity] = useState();
  const handleSubmit = (event) => {
    let inputObj = { code, name, quantity };
    let url = "https://ims-backend-965d.onrender.com/products/addproduct";
    axios
      .post(url, inputObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
    event.preventDefault();
  };  

  return (
    <Layout>
        <div className="card">
            <div className="title">
                <h1>Enter Product Details</h1>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                  <input type="text" 
                  placeholder='Enter product code' 
                  onChange={(e)=>{
                    setCode(e.target.value);
                  }}
                  required/>
                  <input type="text"
                  placeholder='Enter Product Name'
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                  required/>
                  <input 
                  type="text" 
                  placeholder='Enter Quantiy'
                  onChange={(e)=>{
                    setQuantity(e.target.value);
                  }}
                  required/>
                  <input type="submit" value="Add Item(s)" id='sub'/>
                </form>
            </div>
        </div>
    </Layout>
  );
}

export default Add;
