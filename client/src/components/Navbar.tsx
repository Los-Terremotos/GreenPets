import React, { useEffect } from "react";
//import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import { useLocation, Link as Link2 } from "react-router-dom";
import { IoLeaf } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
//import { openModal } from '../Features/modal/modalSlice';
import { RootState } from "../App/store";
import Modal from "./Modal";
//import { openLogin } from '../Features/userAuth/loginSlice';
//import { openSignUp } from '../Features/userAuth/signUpSlice';
import { setNavbarVisibility } from "../Features/Navbar/navbarSlice";
import StyledNavbar from "./StyledNavbar";
import { Link, animateScroll as scroll } from "react-scroll";
// global style specific to this component
//Added style box sizing: border-box for when we are setting height and width it will
//take into account padding and margins.

const NavbarComponent = styled.div`
  a {
    font-size: 20px;
    font-weight: 500;
    text-decoration: inherit;
    text-decoration: none;
    padding: 0.5em;
    color: #7E7E63;
  }
  a:hover {
    border-radius: 15px;
    color: #ffe8d6;
    // border-bottom: 4px solid #FFE8D6;
    background-color: #a5a58d;
    transition: background-color 1s ease;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    a {
      color: #7e7e63;
    }
  }
`;

const UL = styled.ul`
  list-style-type: none;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LI = styled.li`
  margin: 5px;
`;

const SpreadIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeafColor = styled.div`
  color: #a5a58d;
  // color: #5F9EA0;
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  console.log("render");
  //console.log(`Location pathname: ${location.pathname}`);

  const dispatch = useDispatch();

  // logic to setup navbar visibility
  const isNavbarVisible = useSelector(
    (state: RootState) => state.isNavbarVisible.isNavbarVisible
  );

  useEffect(() => {
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
  }, [dispatch]);

  // logic to conditionally render user auth components
  // const handleLoginClick = () => {
  //     dispatch(openModal());
  //     dispatch(openLogin());
  // };

  // const handleSignUpClick = () => {
  //     dispatch(openModal());
  //     dispatch(openSignUp());
  // };

  const sliceCheck = useSelector((state: RootState) => state.modalToggle);
  //console.log(`sliceCheck: ${JSON.stringify(sliceCheck)}`)
  // Check if the modal isOpen prop is true and render the Modal component
  const renderModal = sliceCheck.isOpen && <Modal />;

  // variable to conditionally render the home page nav bar vs the second page & beyond
  const chooseNavBar = (route: string) => {
    if (route === "/") {
      return (
        <StyledNavbar isNavbarVisible={isNavbarVisible}>
          <UL>
            {/* <LI>
                <Link to= 'test-field' spy={true} smooth={true} duration={500}>
                    Test Field
                </Link>
            </LI> */}
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
              {/* For Routing to different page */}
              <Link2 to='/road-map'>
                Roadmap Page
              </Link2>
              {/* Below is for smooth scrolling */}
              {/* <Link to="reviews" spy={true} smooth={true} duration={500}>
                Reviews
              </Link> */}
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
            <LI>
              <a href="/get-started">Get Started</a>
            </LI>
            {/* Uncomment if userAuth is implemented
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up</button>
                        */}
            {/* <MenuIcon /> */}
          </UL>
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
        color: #7e7e63;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: #ffe8d6;
      `;
      return (
        <Nav>
          <SpreadIcons>
            <a href="/">
              <LeafColor>
                <IoLeaf />
              </LeafColor>
            </a>
            {/* <MenuIcon /> */}
          </SpreadIcons>
        </Nav>
      );
    }
  };

  return (
    <NavbarComponent>
      {renderModal}
      {chooseNavBar(location.pathname)}
    </NavbarComponent>
  );
};

export default Navbar;
