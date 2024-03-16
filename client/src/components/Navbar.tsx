import React, { useEffect } from "react";
//import MenuIcon from '@mui/icons-material/Menu';
//import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import StyledNavbar from "./NavbarComponents/StyledNavbar";
import UnstyledNavbar from "./NavbarComponents/UnstyledNavbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App/store";
import { setLightMode } from "../Features/Navbar/lightModeSlice";
import { setNavbarVisibility } from "../Features/Navbar/navbarSlice";
import styled from 'styled-components';
import { Link as Link2 } from "react-router-dom";
import { Link } from "react-scroll";

// User Auth imports
//import { openModal } from '../Features/modal/modalSlice';
//import Modal from "./Modal";
//import { openLogin } from '../Features/userAuth/loginSlice';
//import { openSignUp } from '../Features/userAuth/signUpSlice';


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
  console.log(isNavbarVisible);

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

  {/* User Auth logic. Uncomment when implemented 
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
  */}

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
      {/* {chooseNavBar(location.pathname)} */}
    </>
  );
};

export default Navbar;

// const NavbarComponent = styled.div`
//   a {
//     font-size: 20px;
//     font-weight: 500;
//     text-decoration: inherit;
//     text-decoration: none;
//     padding: 0.5em;
//     color: #7E7E63;
//     transition: background-color 0.5s ease, color 0.5s ease;
//   }
//   a:hover {
//     border-radius: 15px;
//     color: #ffe8d6;
//     background-color: #a5a58d;
//     cursor: pointer;
//   }
// `;

{/* 
  // variable to conditionally render the home page nav bar vs the second page & beyond
  const chooseNavBar = (route: string) => {
    if (route === "/") {
      return (
        <StyledNavbar isNavbarVisible={isNavbarVisible}>
          
        </StyledNavbar>
      );
    } else {
      const Nav = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 20px;
        height: 4rem;
        width: 100%;
        align-items: center;
        color: ${props => props.theme.secondary2.color};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: ${props => props.theme.primary1.color};
      `;
      return (
        <Nav>
          <SpreadIcons>
            <a href="/">
              <LeafColor>
                <IoLeaf />
              </LeafColor>
            </a>
          </SpreadIcons>
        </Nav>
      );
    }
  };
*/}

{/* Uncomment this when auth is implemented
  {renderModal}
*/}

{/* <LI>
  <Link to= 'test-field' spy={true} smooth={true} duration={500}>
    Test Field
  </Link>
</LI> */}
{/* Uncomment if userAuth is implemented
    <button onClick={handleLoginClick}>Login</button>
    <button onClick={handleSignUpClick}>Sign Up</button>
  */}
