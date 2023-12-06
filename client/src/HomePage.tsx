// import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import assets from './assets/plantsInHouse.jpg';
import leaf from './assets/herbal-spa-treatment-leaves.png'
import product from './assets/productExample.webp'
import { Link } from 'react-router-dom';



function HomePage() {
 
  return (
    <>
  <header id='header'>
  <nav id= 'nav-bar'>
    <ul>
      <li><a href='/get-started'>Get Started</a></li>
      <li><a href='/road-map'>Roadmap</a></li>
      <li><a href=''>Contributors</a></li>
      <MenuIcon />
    </ul>
  </nav>
</header>

<div id="upper-container">
  <div>
    <img id="upper-container-img" src={assets} alt="Upper Container Image" />
  </div>
  <div id="text-container">
  <img id="leaf" src={leaf} alt="Leaf Icon" />
    <h1>Your Text Here</h1>
  </div>
</div>

<div id="middle-container">
    <h1 id="md-h1">What is Green Pets</h1>
    <p>Seamlessly find the perfect houseplants tailored to your local environment with our geolocation-based search feature.</p>
</div>

  

{/* <section id="middle-container">
  <h1>What is Green Pets</h1>
  <p>Seamlessly find the perfect houseplants tailored to your local environment with our geolocation-based search feature.</p>
  <Link to="/get-started" className="btn-primary">Get Started</Link>
</section>

<section id="bottom-container">
  <div className="image-container">
    <img className="product" src={product} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </div>
  <div className="image-container">
    <img className="product" src={product} />
    <p>EXAMPLE TEXT Experience effortless integration with our seamless feature that allows you to connect and synchronize across multiple platforms. Enjoy a unified and cohesive user experience as you navigate through various functionalities with ease.</p>
  </div>
  <div className="image-container">
    <img className="product" src={product} />
    <p>EXAMPLE TEXT Uncover information swiftly with our intelligent search feature. Harness the power of advanced algorithms to retrieve accurate and tailored results, making your search experience faster, more precise, and tailored to your needs.</p>
  </div>
</section> */}
    </>
  )
}

export default HomePage
