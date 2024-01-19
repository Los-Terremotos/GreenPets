import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import { IoLeaf } from "react-icons/io5";
import { createGlobalStyle } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../Features/modal/modalSlice';
import { RootState } from '../App/store';
import Modal from './Modal';
import { openLogin } from '../Features/userAuth/loginSlice';
import { openSignUp } from '../Features/userAuth/signUpSlice';
import { NavbarContainerProps } from '../../types';
import { setNavbarVisibility } from '../Features/Navbar/navbarSlice';

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
    color: #7E7E63;
}

@media (prefers-color-scheme: light){
    a{
    color: #FFE8D6;
    }
}
`

const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: whitesmoke;
    color: black;
    font-family: sans-serif;
    padding: 1em;
    height: 45px;
    z-index: 1;
`
const UL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between; 
`
const LI = styled.li`
    margin: 0;
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


const Navbar: React.FC<NavbarContainerProps> = () => {
    const location = useLocation();
    console.log(location.pathname);

    const dispatch = useDispatch();

    // logic to setup navbar visibility
    const isNavbarVisible = useSelector((state: RootState) => state.isNavbarVisible.isNavbarVisible)

    useEffect(() => {
        const handleScroll = () => {
            const isVisible = window.scrollY > 75;
            if ()
            dispatch(setNavbarVisibility());
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

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
    console.log(`sliceCheck: ${JSON.stringify(sliceCheck)}`)
    // Check if the modal isOpen prop is true and render the Modal component
    const renderModal = sliceCheck.isOpen && (
        <Modal />
    );

    // variable to conditionally render the home page nav bar vs the second page & beyond
    const chooseNavBar = (route:string) =>{
        if(route === '/'){
            const Nav = styled.nav<{ visible: boolean }>`
            display: flex;
            justify-content: flex-end; 
            margin-right: 20px;
            height: 100%;
            align-items: center;
            opacity: ${({ visible }) => (visible ? 1 : 0)};
            transition: opacity 0.3s ease;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            `;
    
            return(
                <Nav visible={isNavbarVisible}>
                    <UL>
                        <LI><a href = "/test-field">Test Field</a></LI>
                        <LI><a href = "/get-started">Get Started</a></LI>
                        <LI><a href='/road-map'>Roadmap</a></LI>
                        <LI><a href=''>Contributors</a></LI>
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up</button>
                        <MenuIcon />
                    </UL>
                </Nav>
            );
        }
        else {
            const Nav = styled.nav<{ visible: boolean }>`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-right: 20px;
            height: 100%;
            align-items: center;
            color: #5F9EA0;
            // color: #A5A58D;
            opacity: ${({ visible }) => (visible ? 1 : 0)};
            transition: opacity 0.3s ease;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            `;
            return(
                <Nav visible={isNavbarVisible}>
                    <SpreadIcons>
                        <Link to="/">
                            <LeafColor>
                                <IoLeaf />
                            </LeafColor>
                        </Link>
                        <MenuIcon />
                    </SpreadIcons>
                </Nav>
            );
        }
    }
    
    return(
        
        <Header>
            {renderModal}
            <GlobalStyle/>
            {chooseNavBar(location.pathname)}
        </Header>
    );
};


export default Navbar;