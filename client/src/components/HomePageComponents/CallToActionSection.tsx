import React from 'react';
import styled from 'styled-components';
import { GeneralSectionContainer } from '../../styles';

const CallToActionContainer = styled(GeneralSectionContainer)`
background-image: url("../../src/assets/call-to-action.jpg");
background-position: center;
background-size: cover;
width: 100vw;
height:100vh;

p{
  color: white;
  font-size: 1.2rem;
}
`;

const CallToActionTitle = styled.h1`
font-size: 3rem;
color: #FFFFFF;
text-shadow: 3px 5px 2px #474747;

`
const TextContainer = styled.div`
backdrop-filter: blur(10px);
height: 500px;
border-radius: 10px;
-webkit-box-shadow: 0px 0px 19px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 19px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 19px 1px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CallToActionSection: React.FC = () => {


  return (
    <CallToActionContainer>
      <TextContainer>
      <CallToActionTitle>Discover the perfect plant companion for your space!</CallToActionTitle>
      <p>You can get started below or feel free to sign up or log in now to explore 
        our curated selection and bring the beauty of nature into your home.</p>
      <button>Find your Green Pet!</button>
      <ButtonContainer>
        <button>Login</button>
        <button>Sign Up!</button>
      </ButtonContainer>
      </TextContainer>
    </CallToActionContainer>
  )
}; 

export default CallToActionSection;