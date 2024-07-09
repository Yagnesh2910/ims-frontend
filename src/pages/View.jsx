import React, {useEffect} from 'react'
import Layout from "../components/Layout"
import "../styles/View.css"
import axios from "axios";

function View() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
    .get("https://ims-backend-965d.onrender.com/products/getproducts")
    .then((res) => {
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const deleteProduct = (id) => {
    console.log(id);
    axios
      .delete("https://ims-backend-965d.onrender.com/products/deleteproduct/" + id)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("product deleted successfully");
          setTimeout(() => {
            window.location.reload();
          }, 10);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const display = (data) => {
    return data.map((product) => {
      return (
        <tr>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>
            {/* <button id="edit">Edit</button> */}
            <button id='dlt' onClick={() => {
              deleteProduct(product._id)
            }}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Layout>
        <div className="table">
        <table>
        <thead>
            <tr>
                <th id='th1'>Id</th>
                <th>Name</th>
                <th>Quantity</th>
                <th id='th2'>Action</th>
            </tr>
        </thead>
        <tbody>{display(products)}</tbody>
      </table>
        </div>
    </Layout>
  );
}

export default View;