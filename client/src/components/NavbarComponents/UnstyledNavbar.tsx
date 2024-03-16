import styled from 'styled-components';
// import { IoLeaf } from "react-icons/io5";
//import MenuIcon from '@mui/icons-material/Menu';
import {  DarkGreyGreen, LightGreyGreen,  } from '../../themes';
import icon from "../../assets/icon.png";

const UnstyledNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  height: 4rem;
  width: 100%;
  align-items: center;
  color: ${DarkGreyGreen.secondary2.color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: ${DarkGreyGreen.secondary2.color};
  background-color: ${DarkGreyGreen.primary1.color};
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const SpreadIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

`;

const LeafColor = styled.div`
  color: #a5a58d;
 
`;

const LeafIcon = styled.img`
  width: 50px;
  background-color: floralwhite;
  border-radius: 30px;
  padding-top: 2px;
  padding-bottom: 2px;

  &:hover{
    background-color:${DarkGreyGreen.secondary1.color};
  }
`;


const UnstyledNavbar: React.FC = () => {

  return (
    <UnstyledNavContainer>
      <SpreadIcons>
        <a href="/">
          <LeafColor>
            <LeafIcon src = {icon}/>
          </LeafColor>
        </a>
      </SpreadIcons>
    </UnstyledNavContainer>
  )
};

export default UnstyledNavbar;