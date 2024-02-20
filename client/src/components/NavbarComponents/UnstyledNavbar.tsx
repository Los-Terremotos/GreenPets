import styled from 'styled-components';
import { IoLeaf } from "react-icons/io5";
//import MenuIcon from '@mui/icons-material/Menu';


const UnstyledNavContainer = styled.nav`
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
  color: ${props => props.theme.secondary2.color};
  background-color: ${props => props.theme.primary1.color};
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const SpreadIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeafColor = styled.div`
  color: #a5a58d;
`;


const UnstyledNavbar: React.FC = () => {

  return (
    <UnstyledNavContainer>
      <SpreadIcons>
        <a href="/">
          <LeafColor>
            <IoLeaf />
          </LeafColor>
        </a>
      </SpreadIcons>
    </UnstyledNavContainer>
  )
};

export default UnstyledNavbar;