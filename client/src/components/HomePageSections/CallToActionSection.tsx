import React from 'react';
import styled from 'styled-components';
import { GeneralSectionContainer } from '../../styles';
import { callToActionBackground } from '../../assets';

const CallToActionContainer = styled(GeneralSectionContainer)`
background-image: url(${callToActionBackground});
background-position: center;
background-size: cover;
width: 100vw;
height:100vh;
overflow: hidden;

a{
  text-decoration: none;
}

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
box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
padding: 30px;

  a{
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #588157;
    color: white;
    font-size: 18px;
  }

  a:hover{
    background-color:#a3b18a;
  }
`;

const GetStartedBtn = styled.a`
  margin-bottom: 20px;
  margin-top: 30px;
`;

const CallToActionSection: React.FC = () => {


  return (
    <CallToActionContainer>
      <TextContainer>
      <CallToActionTitle>Discover the perfect plant companion for your space!</CallToActionTitle>
        <p>You can get started below to explore our curated selection and bring the 
          beauty of nature into your home.</p>
      <GetStartedBtn href='/get-started'>Find your Green Pet!</GetStartedBtn>
      <p><i>Greener Living, One Tap Away</i></p>
      </TextContainer>
    </CallToActionContainer>
  )
}; 

export default CallToActionSection;