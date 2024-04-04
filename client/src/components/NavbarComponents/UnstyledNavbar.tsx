import styled from "styled-components";
// import { IoLeaf } from "react-icons/io5";
//import MenuIcon from '@mui/icons-material/Menu';
import { DarkGreyGreen } from "../../themes";
// import icon from "../../assets/icon.png";
import GPicon from "../../assets/GPicon2.svg";
import questionsArr from "../../questionsLibrary";
import { setQueryRes } from "../../Features/QueryResult/queryResultSlice";
import { setCounter } from "../../Features/Questions/questionsCounter";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { RootState } from "../../App/store";
import { createGlobalStyle } from "styled-components";
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

const LeafIcon = styled.img`
  width: 50px;
  border-radius: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
`;
const ResetBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  display: block;
  height: 40px;
  width: 145px;
  background-color: ${(props) => props.theme.secondary2.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 15px;
  color: #ffe8d6;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em;
  color: ${(props) => props.theme.primary2.color};
  text-align: center;
  line-height: 20px;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.secondary1.color};
    color: ${(props) => props.theme.primary1.color};
  }
`;

const UnstyledNavbar: React.FC = () => {
  const queryResult = useAppSelector((state: RootState) => state.queryResult);
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(setQueryRes([]));
    dispatch(setCounter(0));
    for (let i = 1; i < questionsArr.length; i++) {
      questionsArr[i].isAnswered = false;
    }
  };
  return (
    <>
      <GlobalStyle />
      <UnstyledNavContainer>
        <SpreadIcons>
          <a href="/">
            <LeafIcon src={GPicon} />
          </a>
          {queryResult.length > 0 && (
            <ResetBtn onClick={reset}>Restart Search</ResetBtn>
          )}
        </SpreadIcons>
      </UnstyledNavContainer>
    </>
  );
};

export default UnstyledNavbar;
