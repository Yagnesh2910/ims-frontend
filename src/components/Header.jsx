import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className='head'>
      <div className='logo'>
        <h1>IMS</h1>
      </div>
      <div className='opt'>
        <Link to="/view" id='link-text'>
          View
        </Link>
        <Link to="/add" id='link-text'>
          Add
        </Link>
      </div>
    </div>
  )
}

export default Header;