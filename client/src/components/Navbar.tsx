import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import StyledNavbar from "./NavbarComponents/StyledNavbar";
import UnstyledNavbar from "./NavbarComponents/UnstyledNavbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App/store";
import { setLightMode } from "../Features/Navbar/lightModeSlice";
import { setNavbarVisibility } from "../Features/Navbar/navbarSlice";
import { Link as Link2 } from "react-router-dom";
import { Link } from "react-scroll";

const UL = styled.ul`
  list-style-type: none;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LI = styled.li`
  margin: 5px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5em;
  color: #304D30;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    border-radius: 15px;
    color: #EEF0E5;
    background-color: #163020;
    cursor: pointer;
  }
`;

const StyledLink2 = styled(Link2)`
font-size: 20px;
font-weight: 500;
text-decoration: none;
padding: 0.5em;
color: #304D30;
transition: background-color 0.5s ease, color 0.5s ease;

&:hover {
  border-radius: 15px;
  color: #EEF0E5;
  background-color: #163020;
  cursor: pointer;
}
`;


const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  // logic to setup navbar visibility
  const isNavbarVisible = useSelector(
    (state: RootState) => state.isNavbarVisible.isNavbarVisible
  );

  useEffect(() => {
    // // Check state of navbar boolean
    // console.log("isNavbarVisible:", isNavbarVisible);

    const handleScroll = () => {
      // const scrollPosition = window.scrollY;
      // console.log('Scroll Position:', scrollPosition);

      const isVisible = window.scrollY > 150;
      dispatch(setNavbarVisibility(isVisible));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, [dispatch, isNavbarVisible]);

  // logic to toggle theme setting
  const handleToggleTheme = () => {
    dispatch(setLightMode());
  }


  return (
    <>
      <Routes>

        <Route 
          path="/" 
          element={
            <StyledNavbar isNavbarVisible={isNavbarVisible}>
              <UL>
  
                <LI>
                  <Link to="top" spy={true} smooth={true} duration={500}>
                    Home
                  </Link>
                </LI>
                <LI>
                  <Link to="about-us" spy={true} smooth={true} duration={500}>
                    About Us
                  </Link>
                </LI>
                <LI>
                  <Link to="features" spy={true} smooth={true} duration={500}>
                    Services
                  </Link>
                </LI>
                <LI>
                  <Link to="road-map" spy={true} smooth={true} duration={500}>
                    Roadmap
                  </Link>
                </LI>
                <LI>
                  <Link to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                  </Link>
                </LI>
                  <StyledLink2 to='/get-started'>
                    Get Started
                  </StyledLink2>
                <LI>
                  <a onClick={handleToggleTheme}>Surprise?</a>
                </LI>
                
              </UL>
            </StyledNavbar>
          }
        />
        <Route 
          path="/get-started"
          element={<UnstyledNavbar />}
        />

      </Routes>
    </>
  );
};

export default Navbar;

/*
Logic for implemented user authorization:

// User Auth imports
//import { openModal } from '../Features/modal/modalSlice';
//import Modal from "./Modal";
//import { openLogin } from '../Features/userAuth/loginSlice';
//import { openSignUp } from '../Features/userAuth/signUpSlice';


  User Auth logic. Uncomment when implemented 
  // logic to conditionally render user auth components
  const handleLoginClick = () => {
    dispatch(openModal());
    dispatch(openLogin());
  };

  const handleSignUpClick = () => {
      dispatch(openModal());
      dispatch(openSignUp());
  };

  const sliceCheck = useSelector((state: RootState) => state.modalToggle);
  //console.log(`sliceCheck: ${JSON.stringify(sliceCheck)}`)
  // Check if the modal isOpen prop is true and render the Modal component
  const renderModal = sliceCheck.isOpen && <Modal />;


*/