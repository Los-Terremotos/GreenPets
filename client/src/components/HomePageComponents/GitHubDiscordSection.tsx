import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const LeftSection = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-end;
padding-right: 20px;
`


const GithubIcon = styled.a`
  font-size: 50px;

  :hover{
    color: #ffdab9;
  }

`

const DiscordIcon = styled.a`
  font-size: 50px;

  :hover{
    color: #ffdab9;
  }

`

const GitHubDiscordSection: React.FC = () => {

    return (
        <LeftSection>
        <h3>Check out our repo on GitHub or join the discussion on Discord!</h3>
        <GithubIcon href="https://github.com/Los-Terremotos/GreenPets">
          {" "}
          <FontAwesomeIcon
            className="icon"
            icon={faGithub}
            style={{ color: "black" }}
          />
        </GithubIcon>
        <DiscordIcon href="https://discord.com/invite/FUjxpkVnUn">
          {" "}
          <FontAwesomeIcon
            className="icon"
            icon={faDiscord}
            style={{ color: "black" }}
          />
        </DiscordIcon>
        </LeftSection>
    )
  };
  
  
  export default GitHubDiscordSection;