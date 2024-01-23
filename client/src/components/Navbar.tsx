import React, { useEffect } from 'react';
//import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import { IoLeaf } from "react-icons/io5";
import { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
//import { openModal } from '../Features/modal/modalSlice';
import { RootState } from '../App/store';
import Modal from './Modal';
//import { openLogin } from '../Features/userAuth/loginSlice';
//import { openSignUp } from '../Features/userAuth/signUpSlice';
import { setNavbarVisibility } from '../Features/Navbar/navbarSlice';
import StyledNavbar from './StyledNavbar';

// global style specific to this component
//Added style box sizing: border-box for when we are setting height and width it will
//take into account padding and margins.
const GlobalStyle = createGlobalStyle`
:root{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #A5A58D;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a { font-weight: 500;
    color: black;
    text-decoration: inherit;
    text-decoration: none;
    padding: 0.5em;
    color: black; 
}
a:hover{
    border-radius: 15px;
    color: #FFE8D6;
    // border-bottom: 4px solid #FFE8D6;
    background-color: #A5A58D;
    transition: background-color 1s ease;
}

@media (prefers-color-scheme: light){
    a{
    color: #FFE8D6;
    }
}
`
// commented out since all styling resides within the nav variable
// const Header = styled.header`
//     position: fixed;
//     width: 100%;
//     top: 0;
//     left: 0;
//     background-color: pink;
//     color: black;
//     font-family: sans-serif;
//     padding: 1em;
//     height: 45px;
//     z-index: 1;
// `
const UL = styled.ul`
    list-style-type: none;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LI = styled.li`
    margin: 12px;
`

const SpreadIcons = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeafColor = styled.div`
    color: #A5A58D;
    // color: #5F9EA0;
`

const Navbar: React.FC = () => {
    const location = useLocation();
    //console.log(`Location pathname: ${location.pathname}`);

    const dispatch = useDispatch();

    // logic to setup navbar visibility
    const isNavbarVisible = useSelector((state: RootState) => state.isNavbarVisible.isNavbarVisible)

    useEffect(() => {
        const handleScroll = () => {
            // const scrollPosition = window.scrollY;
            // console.log('Scroll Position:', scrollPosition);

            const isVisible = window.scrollY > 150;
            dispatch(setNavbarVisibility(isVisible));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
    const renderModal = sliceCheck.isOpen && (
        <Modal />
    );

    // variable to conditionally render the home page nav bar vs the second page & beyond
    const chooseNavBar = (route:string) =>{
        if(route === '/'){
            return(
                <StyledNavbar isNavbarVisible={isNavbarVisible}>
                    <UL>
                        <LI><a href = "/test-field">Test Field</a></LI>
                        <LI><a href = "/get-started">Get Started</a></LI>
                        <LI><a href='/road-map'>Roadmap</a></LI>
                        <LI><a href=''>Contributors</a></LI>
                        {/* Uncomment if userAuth is implemented
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up</button>
                        */}
                        {/* <MenuIcon /> */}
                    </UL>
                </StyledNavbar>
            );
        }
        else {
            const Nav = styled.nav`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-right: 20px;
            height: 4rem;
            width: 100%;
            align-items: center;
            color: #5F9EA0;
            // color: #A5A58D;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background-color: whitesmoke;
            `;
            return(
                <Nav>
                    <SpreadIcons>
                        <Link to="/">
                            <LeafColor>
                                <IoLeaf />
                            </LeafColor>
                        </Link>
                        {/* <MenuIcon /> */}
                    </SpreadIcons>
                </Nav>
            );
        }
    }
    
    return(
        <>
            {renderModal}
            <GlobalStyle/>
            {chooseNavBar(location.pathname)}
        </>
    );
};


export default Navbar;