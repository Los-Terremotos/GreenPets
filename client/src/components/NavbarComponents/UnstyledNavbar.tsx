import styled from 'styled-components';
// import { IoLeaf } from "react-icons/io5";
//import MenuIcon from '@mui/icons-material/Menu';
import {  DarkGreyGreen, LightGreyGreen,  } from '../../themes';
import icon from "../../assets/icon.png";
import questionsArr from '../../questionsLibrary';
import { setQueryRes } from '../../Features/QueryResult/queryResultSlice';
import { setCounter } from '../../Features/Questions/questionsCounter';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { RootState } from '../../App/store';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
  }
`;
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
const ResetBtn = styled.button`
font-size: 1em;
margin: 1em;
border-radius: 5px;
background-color: floralwhite;
color: ${DarkGreyGreen.primary1.color};
padding: 0.25em 1em;
border: none;

&:hover {
  background-color: ${DarkGreyGreen.secondary1.color};
}
`;

const UnstyledNavbar: React.FC = () => {
  const queryResult = useAppSelector((state: RootState) => state.queryResult);
  const dispatch = useAppDispatch();

  const reset = () =>{
    dispatch(setQueryRes([]));
    dispatch(setCounter(0));
    for(let i =1; i < questionsArr.length; i++){
      questionsArr[i].isAnswered = false;
    }
  }
  return (
    <>
    <GlobalStyle />
    <UnstyledNavContainer>
      <SpreadIcons>
        <a href="/">
          <LeafColor>
            <LeafIcon src = {icon}/>
          </LeafColor>
        </a>
        {queryResult.length > 0 && <ResetBtn onClick = {reset}>Restart Search</ResetBtn>}
      </SpreadIcons>
    </UnstyledNavContainer>
    </>3
  )
};

export default UnstyledNavbar;

