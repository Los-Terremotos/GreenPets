import Nav from '../components/Navbar';
import styled from 'styled-components';
import Questions from '../components/Questions';
import Results from '../components/Results';
import { useAppSelector } from '../Hooks/hooks';
import { RootState } from '../App/store.ts';
import { plant } from '../../types.ts';

const Main = styled.main`
  padding-top: 45px;
  display: grid;
  justify-content: center;
  height: 100vh;
  text-align:center;

  .btnContainer{
    display: flex;
    justify-content: space-around;
    width: 100vw;
  }



// button{
//   height: 150px;
//   width: 300px;
//   background-color: #FFE8D6;
//   color: #404337;
//   border-radius: 20px;
//   font-size: 18px;
// }

// button:hover{
//   background-color: #404337;
//   color: #FFE8D6;
// }

  h1{
    align-self: center;
    color: #404337;
  }
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
