import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Add.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('User');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const result = await axios.post('https://ims-backend-965d.onrender.com/users/verify', { email, password,userType })
            console.log(result);
                if(result.data==="Success")
                {
                    navigate('/view');
                }else{
                    alert('Login Failed');
                }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="card">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="opt">
            <h4>
                Login as
            </h4>
            <input type="radio"
            id='rad'
            value="User"
                  onChange={(e)=>{
                    setUserType(e.target.value);
                  }}
                  checked={userType==='User'}/>User
            <input type="radio"
            id='rad'
            value="Admin"
                  onChange={(e)=>{
                    setUserType(e.target.value);
                  }}
                  checked={userType==='Admin'}/>Admin
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Enter email"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }} 
                  required/>
                  <input type="password" placeholder='Enter password'
                  value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                  required/>
                  <input type="submit" id="reg" value="Login"/>
                </form> 
            </div>
            <div className="log">
                <p>New user? </p>
                {/* <br /> */}
                <Link to="/signup">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;