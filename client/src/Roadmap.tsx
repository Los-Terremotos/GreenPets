// import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IoLeaf } from "react-icons/io5";
import "./roadmap.css";
import { Link } from 'react-router-dom';


const Roadmap = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav-bar'>
          <Link to="/">
            <IoLeaf />
          </Link>
            <MenuIcon />
          </nav>
      </header>
  

  <section id="rd-container">
  <h1>Roadmap</h1>
  <Link to="/get-started" className="btn-primary">Get Started</Link>
</section>


      <section id="container">
  <div className="img-container">
    <img className="prod" src={''} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </div>
  <div className="img-container">
    <img className="prod" src={''} />
    <p>EXAMPLE TEXT Experience effortless integration with our seamless feature that allows you to connect and synchronize across multiple platforms. Enjoy a unified and cohesive user experience as you navigate through various functionalities with ease.</p>
  </div>
  <div className="img-container">
    <img className="prod" src={''} />
    <p>EXAMPLE TEXT Uncover information swiftly with our intelligent search feature. Harness the power of advanced algorithms to retrieve accurate and tailored results, making your search experience faster, more precise, and tailored to your needs.</p>
  </div>
</section>
    </>
  )
}

export default Roadmap
