import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
  width: 100%;
  background-color: #75472F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #f0ead2, #adc178, #adc178, #6c584c);
  height: 25vh;
  color: white;

  h1{
    color: #FFFFFF;
    text-shadow: #474747 3px 2px 2px;
  }
`;

const GithubIcon = styled.a`
  font-size: 50px;

  :hover{
    color: #ffdab9;
  }

`


const FooterSection: React.FC = () => {


  return (
    <FooterContainer>
      <h1>Looking for ways to contribute?</h1>
      <h3>Check out our Repo below!</h3>
      <GithubIcon href = "https://github.com/Los-Terremotos/GreenPets">
                    {" "}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      style={{ color: "black" }}
                    />
                  </GithubIcon>
    </FooterContainer>
  )
};


export default FooterSection;