// import React from 'react';



import './HomePage.css'
import MenuIcon from '@mui/icons-material/Menu';
import assets from './assets/plantsInHouse.jpg';
import leaf from './assets/herbal-spa-treatment-leaves.png'
import product from './assets/productExample.webp'





function HomePage() {
 

  return (
    <>
    <header id='header'>
  <nav id='nav-bar'>
    <ul>
      <li><a href=''>Get Started</a></li>
      <li><a href=''>Roadmap</a></li>
      <li><a href=''>Contributors</a></li>
      <MenuIcon />
    </ul>
  </nav>
</header>

<section id="upper-container">
  <div id="upper-icon">
    <img id="leaf" src={leaf} />
  </div>
  <div id="content-container">
    <img id="upper-container-img" src={assets}/>
    <h2 id="upper-container-msg">
      Your Personal Green Oasis – 
      Plants Tailored to 
      Your Locale and Weather!
    </h2>
  </div>
</section>

<section id="middle-container">
  <h1>What is Green Pets</h1>
  <p>Seamlessly find the perfect houseplants tailored to your local environment with our geolocation-based search feature.</p>
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
</section>
    </>
  )
}

export default HomePage
