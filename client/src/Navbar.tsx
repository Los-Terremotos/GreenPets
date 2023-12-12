import MenuIcon from '@mui/icons-material/Menu';
import navStyles from './nav.module.css';
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
justify-content: flex-end; 
margin-right: 20px;
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


export default function Navbar (){
    
    return(
        
        <Header>
            <Nav>
            <UL>
                <LI><A href = "/get-started">Get Started</A></LI>
                <LI><A href=''>Roadmap</A></LI>
                <LI><A href=''>Contributors</A></LI>
                <MenuIcon />
            </UL>
            </Nav>
      </Header>
    );
}