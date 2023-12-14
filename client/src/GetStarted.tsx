import useState from 'react';
import Nav from './Navbar'
import styled from 'styled-components';

const Main = styled.main`
padding-top: 45px;
display: grid;
justify-content: center;
height: 100vh;

div{
  display: flex;
  justify-content: center;
}

button{
  height: 150px;
  width: 300px;
  background-color: #FFE8D6;
  color: #404337;
  border-radius: 20px;
  font-size: 18px;
}

button:hover{
  background-color: #404337;
  color: #FFE8D6;
}
`

const Questionh1 = styled.h1`
  align-self: center;
  color: #404337;
`

const GetStarted = () => {
  
  return (
    <div>
      <Nav />
      <Main>
      <Questionh1>Let's find you a new green Pet!</Questionh1>
      <div>
        <button>Begin!</button>
      </div>
      </Main>
    </div>
  )
}

export default GetStarted
