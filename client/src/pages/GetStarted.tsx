import styled, { ThemeProvider } from 'styled-components';
import Questions from '../components/Questions';
import Results from '../components/ResultsPageComponents/Results.tsx';
import {useAppSelector } from '../Hooks/hooks';
import { RootState } from '../App/store.ts';
import { plant } from '../../types.ts';
import {leavesWhiteBackground} from '../assets/index.ts';
import UnstyledNavbar from '../components/NavbarComponents/UnstyledNavbar.tsx';
import {  DarkGreyGreen, LightGreyGreen,  } from '../themes';
import { useSelector } from 'react-redux';

const Main = styled.main<{$queryResult : plant[]}>`
display: grid;
${
  (props)=>{
    if(props.$queryResult.length === 0){
      return `grid-template-columns: 1fr 50% 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "prev question next";
      height: 100vh;
      `;
    }
      return `
      background-attachment: fixed;
      height:100%;
      `;
  }
}
justify-content: center;
text-align:center;
background-image: url(${leavesWhiteBackground});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

const GetStarted = () => {
  const queryResult : plant[] = useAppSelector((state : RootState) => state.queryResult);
  console.log(queryResult.length);

  const themeState = useSelector((state: RootState) => state.lightModeToggle.lightMode);

  return (
    <>
      <ThemeProvider theme={themeState ? LightGreyGreen : DarkGreyGreen}>
        <UnstyledNavbar />
        <Main $queryResult = {queryResult}>
          {queryResult.length > 0 ? <Results /> :  <Questions/>}
        </Main>
      </ThemeProvider>
      
    </>
  )
}

export default GetStarted
