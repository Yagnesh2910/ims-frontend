import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import{useNavigate} from "react-router-dom";
import "../styles/Add.css"

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const navigate=useNavigate()

    const handleSubmit = (event) => {
        let inputObj = { name,email,password,userType };
        let url = "http://ims-backend-965d.onrender.com/users/adduser";
        if(userType==="Admin" && secretKey!=="12345"){
          alert("Invalid Admin");
        }
        else{
          axios
          .post(url, inputObj)
          .then((res) => {
            console.log(res);
            navigate('/')
          })
          .catch((err)=>{
            console.log("ax");
            console.log(err);
          });
        }
        event.preventDefault();
      }; 

    return (
        <div className="card">
            <div className="title">
                <h1>Registration</h1>
            </div>
            <div className="opt">
              <h4>
              Register As
              </h4>
                    <input
                        type="radio"
                        name="UserType"
                        value="User"
                        id="rad"
                        onChange={(e) => setUserType(e.target.value)}
                    /> User
                    <input
                        type="radio"
                        name="UserType"
                        value="Admin"
                        id="rad"
                        onChange={(e) => setUserType(e.target.value)}
                    /> Admin
                </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                {userType === "Admin" && (
                        <input type="text" placeholder="Enter Secret Key" 
                        onChange={(e)=>{
                          setSecretKey(e.target.value);
                        }}
                        required/>
                    )}

                  <input type="text" placeholder="Enter Name" 
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                  required/>
                  <input type="email" placeholder="Enter email" 
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                  required/>
                  <input type="password" placeholder="Enter Password" 
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                  required/>
                  <input type="submit" id="reg" value="Submit"/>
                </form> 
            </div>
            <div className="log">
                <p>Already have an account?</p>
                {/* <br /> */}
                <Link to="/">
                    Login
                </Link> 
            </div>
        </div>
    );
}


export default Signup;
