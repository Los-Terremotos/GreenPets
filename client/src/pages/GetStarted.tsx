import styled from 'styled-components';
import Questions from '../components/Questions';
import Results from '../components/Results';
import {useAppSelector } from '../Hooks/hooks';
import { RootState } from '../App/store.ts';
import { plant } from '../../types.ts';
import {leavesWhiteBackground} from '../assets/index.ts';
import UnstyledNavbar from '../components/NavbarComponents/UnstyledNavbar.tsx';

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
  return (
    <>
      <UnstyledNavbar />
      <Main $queryResult = {queryResult}>
        {queryResult.length > 0 ? <Results /> :  <Questions/>}
      </Main>
    </>
  )
}

export default GetStarted
