// import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import assets from './assets/plantsInHouse.jpg';
import leaf from './assets/herbal-spa-treatment-leaves.png'
import graph from './assets/graph.jpg';
import lineGraph from './assets/line-graph.jpg'
import search from './assets/search.jpg'
import { Link } from 'react-router-dom';



function HomePage() {
 
  return (
    <>
  {/* <header id='header'>
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

<div id='flex-end-container'>
  <div id='end-container'>
  <img className="feat-container-img" src={search} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </div>
  <div id='end-container'>
  <img className="feat-container-img" src={graph} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </div>
  <div id='end-container'>
  <img className="feat-container-img" src={lineGraph} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </div>
</div> */}
    </>
  )
}

export default HomePage
