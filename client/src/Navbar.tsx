import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import { IoLeaf } from "react-icons/io5";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
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
let Nav;
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
// const A = styled.a`
// font-weight: 500;
// color: black;
// text-decoration: inherit;
// text-decoration: none;
// padding: 0.5em;
// color: black;    

// &:hover{
//     color: #7E7E63;
// }

// @media (prefers-color-scheme: light){
//     color: #FFE8D6;
// }

// `
const chooseNavBar = (route:string) =>{
    if(route === '/'){
        Nav = styled.nav`display: flex;
        justify-content: flex-end; 
        margin-right: 20px;`;

        return(
            <Nav>
            <UL>
                <LI><a href = "/get-started">Get Started</a></LI>
                <LI><a href='/road-map'>Roadmap</a></LI>
                <LI><a href=''>Contributors</a></LI>
                <MenuIcon />
            </UL>
            </Nav>
        );
    }
    else{
        Nav = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 20px;
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
    const location = useLocation();
    console.log(location.pathname);
    
    return(
        
        <Header> 
            <GlobalStyle/>
            {chooseNavBar(location.pathname)}
      </Header>
    );
}