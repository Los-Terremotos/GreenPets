import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import { IoLeaf } from "react-icons/io5";

let styles = `display: flex;
justify-content: flex-end; 
margin-right: 20px;`;

const Nav = styled.nav`${styles}`;

const Header = styled.header`
position: fixed;
width: 100%;
top: 0;
left: 0;
background-color: whitesmoke;
color: black;
font-family: sans-serif;
padding: 1em;

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
const A = styled.a`
font-weight: 500;
color: black;
text-decoration: inherit;
text-decoration: none;
padding: 0.5em;
color: black;    

&:hover{
    color: #7E7E63;
}

@media (prefers-color-scheme: light){
    color: #FFE8D6;
}

`
const chooseNavBar = (route:string) =>{
    console.log(route);
    if(route === '/'){
        return(
            <Nav>
            <UL>
                <LI><A href = "/get-started">Get Started</A></LI>
                <LI><A href='/road-map'>Roadmap</A></LI>
                <LI><A href=''>Contributors</A></LI>
                <MenuIcon />
            </UL>
            </Nav>
        );
    }
    else{
        styles = `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        `;
        return(
            <Nav>
            <Link to="/">
            <IoLeaf />
            </Link>
            <MenuIcon />
            </Nav>
        );
    }
}

export default function Navbar (){
    let location = useLocation();
    console.log(location.pathname);
    
    return(
        
        <Header> 
            {chooseNavBar(location.pathname)}
      </Header>
    );
}