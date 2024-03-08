import Nav from '../components/Navbar';
import styled from 'styled-components';
import Questions from '../components/Questions';
import Results from '../components/Results';
import { useAppSelector } from '../Hooks/hooks';
import { RootState } from '../App/store.ts';
import { plant } from '../../types.ts';
import {leavesWhiteBackground} from '../assets/index.ts';

const Main = styled.main`
padding-top: 45px;
display: grid;
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
