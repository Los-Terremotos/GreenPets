import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { closeModal } from '../Features/modal/modalSlice';
import { closeSignUp } from '../Features/userAuth/signUpSlice';
import { openLogin } from '../Features/userAuth/loginSlice';


const SignUpContainer = styled.div`
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


const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignUp = () => {
    // perform sign up logic here, e.g. GraphQL mutation
    // Dispatch the sign up action
    // Need to create a slice to create user within DB
    //dispatch(signUp());
    return alert('You can\'t plant flowers if you haven\'t botany 💁🏼🌿')
  };

  const handleClose = () => {
    dispatch(closeSignUp());
    dispatch(closeModal());
  };

  const handleLoginSwitch = () => {
    dispatch(closeSignUp());
    dispatch(openLogin());
  };


  return (
    <SignUpContainer>
      <XContainer>
        <FiX onClick={handleClose} />
      </XContainer>
      
      <TestHeader>Hello from inside Sign Up container</TestHeader>
      
      <button onClick={handleSignUp}>Test Sign Up</button>

      <TestBox onClick={handleLoginSwitch}>
        Already have an account?! Login here!
      </TestBox>
    </SignUpContainer>
  )
};

export default SignUp;