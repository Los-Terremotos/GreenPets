import React, { useEffect } from "react";
import styled from "styled-components";
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
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppSelector } from "../Hooks/hooks";
import { toggleHamburger } from "../Features/Navbar/hamburgerOpen";
import { FaXmark } from "react-icons/fa6";


// User Auth imports
//import { openModal } from '../Features/modal/modalSlice';
//import Modal from "./Modal";
//import { openLogin } from '../Features/userAuth/loginSlice';
//import { openSignUp } from '../Features/userAuth/signUpSlice';

const HamburgerMenu = styled(GiHamburgerMenu)`
    height: 100%;
    color: #304D30;
    padding-right: 10px;
    font-size:35px;
    @media(min-width: 1024px){
      display: none;
    }
`;

const ExitIcon = styled(FaXmark)`
height: 100%;
padding-right: 10px;
font-size:35px;
color: #304D30;
@media(min-width: 1024px){
  display: none;
}
`;

const UL = styled.ul<{$showNav: boolean}>`
  list-style-type: none;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1024px ){
    ${(props) =>{
      if(!props.$showNav){
        return `display: none;`
      }
    }}
    text-align: center;
    margin:0;
    width: 100%;
    position: absolute;
    top: 100%;
    flex-direction: column;
    background-color: inherit;
  }
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

  @media(max-width: 1024px){
    display:flex;
    width:100%;
    border-bottom: 2px solid black;
    margin: 0;
    padding: 0;
    &:first-child{
        border-top: 2px solid black;
    }

    &:hover{
      border-radius: 0;
    }
  }
`;

const StyledLink2 = styled(Link2)`
color: inherit;
text-decoration: inherit;

@media(max-width:1024px){
  padding: 1rem;
  display: inline-block;
  width: 100%;
}
`;

const StyledLink = styled(Link)`
    @media(max-width: 1024px){
    padding:1rem;
    display: inline-block;
    width: 100%; 
  }
`

const SurpriseLink = styled.a`
@media(max-width: 1024px){
  padding: 1rem;
  display: inline-block;
  width: 100%;
  border-radius: 0;
}
`;

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const showNav = useAppSelector((state:RootState) => state.hamburgerReducer);
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
             {showNav ? <ExitIcon onClick = {() => dispatch(toggleHamburger(false))}/> : <HamburgerMenu id = "burger" onClick = {() => dispatch(toggleHamburger(true))}/>}
              <UL $showNav = {showNav}>
                <LI>
                  <StyledLink to="top" spy={true} smooth={true} duration={500} onClick = {() => dispatch(toggleHamburger(false))}>
                    Home
                  </StyledLink>
                </LI>
                <LI>
                  <StyledLink to="about-us" spy={true} smooth={true} duration={500} onClick = {() => dispatch(toggleHamburger(false))}>
                    About Us
                  </StyledLink>
                </LI>
                <LI>
                  <StyledLink to="features" spy={true} smooth={true} duration={500} onClick = {() => dispatch(toggleHamburger(false))}>
                    Services
                  </StyledLink>
                </LI>
                <LI>
                  <StyledLink to="road-map" spy={true} smooth={true} duration={500} onClick = {() => dispatch(toggleHamburger(false))}>
                    Roadmap
                  </StyledLink>
                </LI>
                <LI>
                  <StyledLink to="contact" spy={true} smooth={true} duration={500} onClick = {() => dispatch(toggleHamburger(false))}>
                    Contact
                  </StyledLink>
                </LI>
                  <LI>
                  <StyledLink2 to='/get-started'>
                    Get Started
                  </StyledLink2>
                  </LI>
                <LI>
                  <SurpriseLink onClick={() => {handleToggleTheme(); dispatch(toggleHamburger(false));}}>
                    Surprise?
                    </SurpriseLink>
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