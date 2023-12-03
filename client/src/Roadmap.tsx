import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IoLeaf } from "react-icons/io5";
import "./roadmap.css";
import {Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <>
    <h2>Hello Roadmap Page</h2>
  
    <header className='header'>
      <nav className='nav-bar'>
      <Link to="/">
        <IoLeaf />
      </Link>
      <MenuIcon />
      </nav>
    </header>
    </>
  )
}

export default Roadmap
