import React from "react";
import styled from 'styled-components';
import { GeneralSectionContainer } from "../../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const AboutSectionContainer = styled(GeneralSectionContainer)`
  background-color: #75472F;
  height: 60vh;
`
const TextContainer = styled.div`
  flex: 1;
  text-align: center; 
  margin-right: 20%;

  h1{
    font-size: 40px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    display: none;
  }

  color: white;
`

const ContributionContainer = styled.div`
  height: 70vh;
  display: grid;
  grid-template-rows: 1fr 1fr
  grid-template-columns: 1fr;
  background-color: #b6ad90;

color: #fff;

    h1{
      text-align:center;
      padding-top:50px;
    }

    li{
        list-style: none;
        text-align:center;
    }
    .contributor-profile{
        grid-area: contributor
    }
    .contribution-icons{
        display: flex;
        font-size: 40px;
        justify-content: space-around;
    }

    .icon : hover{
        color:green
    }
`;

const ContributionImg = styled.img`
  width: 200px;
  border-radius: 60%;
`;

const ContributorWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;


const AboutSection: React.FC = () => {


  return (
    <>
      <AboutSectionContainer>
        <TextContainer>
          <h1>What is Green Pets?</h1>
          <p>GreenPets is more than just an app; it's your gateway to the world of plants. Our mission is to connect people with the perfect plant companions, making plant care accessible, enjoyable, and sustainable. Whether you're a seasoned plant parent or just starting out, GreenPets guides you through every step, ensuring a greener, happier space. Join our community of green enthusiasts and embark on a journey where every plant tells a story.</p>
          <br/>
          <br/>
          <h1>Our Mission</h1>
          <p>We want to make your plant discovery journey one to remember!</p>
        </TextContainer>
      </AboutSectionContainer>

      <ContributionContainer id = "contribution">
      <h1>Contributors</h1>
      <ContributorWrap>
        <div>
          <ContributionImg src = "../src/assets/contributors/kp.jpeg"/>
            <ul>
                <li>Kevin Phan</li>
                <li>Full Stack Engineer</li>
                <div className = "contribution-icons">
                <li> <a href = "https://github.com/KP824"> <FontAwesomeIcon className="icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/kp824/"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/matt.jpeg"/>
            <ul>
                <li>Matt Mattox</li>
                <li>Front-End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/heyitsmattox"><FontAwesomeIcon className="icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/mattmattox12/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/cristian.jpeg"/>
            <ul>
                <li>Cristian Corrales</li>
                <li>Front-End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/crisdevs"><FontAwesomeIcon className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/criscorr/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
        <div>
            <ContributionImg src = "../src/assets/contributors/stephanie.jpeg"/>
            <ul>
                <li>Stephanie Serrano</li>
                <li>Back End Engineer</li>
                <div className = "contribution-icons">
                <li><a href = "https://github.com/stephanie-115"><FontAwesomeIcon className = "icon" icon={faGithub} style={{color: "black"}}/></a></li>
                <li><a href = "https://www.linkedin.com/in/stephanie-t-serrano/"><FontAwesomeIcon className = "icon" icon={faLinkedin} style={{color: "black"}}/></a></li>
                </div>
            </ul>
        </div>
      </ContributorWrap>
    </ContributionContainer>
      
    </>
  )
};

export default AboutSection;