import React from 'react';
//import axios from 'axios';
import { useDispatch } from 'react-redux';
//import { login } from '../Features/userAuth/authSlice';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { closeModal } from '../Features/modal/modalSlice';
import { closeLogin } from '../Features/userAuth/loginSlice';
import { openSignUp } from '../Features/userAuth/signUpSlice';


const LoginContainer = styled.div`
  position: relative;
  border-width: 4px;
  border-color: #4b5563; /* Neutral-800 color */
  background-color: #f3f4f6; /* Stone-100 color */
  width: 450px;
  height: 520px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 0.375rem; /* Equivalent to rounded-lg */
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const XContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem; /* 16px */
`;

const TestBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 70px;
  width: 75%;
  border-radius: 5px;
  color: white;
`;

const TestHeader = styled.h3`
  color: green;
`;


const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // perform login logic here, e.g. GraphQL mutation
    // Dispatch fthe login action
    // dispatch(login());
    return alert('What do you call a tea made with cannabis? .... Four Twentea 🍵')
  };

  const handleClose = () => {
    dispatch(closeLogin());
    dispatch(closeModal());
  };

  const handleSignUpSwitch = () => {
    dispatch(closeLogin());
    dispatch(openSignUp());
  };

  return (
    <LoginContainer>
      <XContainer>
        <FiX onClick={handleClose} />
      </XContainer>

      <TestHeader>Hello from inside login container</TestHeader>
      
      <button onClick={handleLogin}>Test Login</button>
      
      <TestBox onClick={handleSignUpSwitch}>
        Don't have an account yet? Sign Up here!
      </TestBox>
    </LoginContainer>
  )
};

export default Login;