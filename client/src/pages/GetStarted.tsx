import Nav from '../components/Navbar';
import styled from 'styled-components';
import Questions from '../components/Questions';
import Results from '../components/Results';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { RootState } from '../App/store.ts';
import { plant } from '../../types.ts';
import {leavesWhiteBackground} from '../assets/index.ts';
import { Root } from 'react-dom/client';
import { setQueryRes } from '../Features/QueryResult/queryResultSlice.ts';

const Main = styled.main`
padding-top: 45px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: "prev question next";
justify-content: center;
height: 100vh;
text-align:center;
background-image: url(${leavesWhiteBackground});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const GetStarted = () => {
  const queryResult : plant[] = useAppSelector((state : RootState) => state.queryResult);
  return (
    <div>
      <Nav />
      <Main>
        {queryResult.length > 0 ? <Results /> :  <Questions/>}
      </Main>
    </div>
  )
}

export default GetStarted
