// import React from 'react';
import './HomePage.css'
import MenuIcon from '@mui/icons-material/Menu';
import assets from '../assets/plantsInHouse.jpg';
import leaf from '../assets/herbal-spa-treatment-leaves.png'
import { Link } from 'react-router-dom';




function HomePage() {
 

  return (
    <>
    
      <header id='header'>
        <nav id='nav-bar'>
          <ul>
            <li><Link to='/testField'>Test Field</Link></li>
            <li><a href=''>Get Started</a></li>
            <li><a href=''>Roadmap</a></li>
            <li><a href=''>Contributors</a></li>
            <MenuIcon />
          </ul>
        </nav>
      </header>
      <section id="upper-container">
      <div id="upper-icon">
        <h3>Hello World</h3>
        <img id = 'leaf' src={leaf} />
      </div>
        <div>
          <img  id="upper-container-img" src={assets}/>
          < h2 id="upper-container-msg">
            Your Personal Green Oasis – 
            Plants Tailored to 
            Your Locale and Weather!
            
          </h2>
        </div>
      </section>
    </>
  )
}

export default HomePage
