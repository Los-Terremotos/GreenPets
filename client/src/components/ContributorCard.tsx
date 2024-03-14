import React from 'react';
import styled from 'styled-components';
import { ContributorCardProps } from '../../types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContributorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 370px;
  background-color: floralwhite;
  box-shadow: 5px 5px 5px ${props => props.theme.secondary1.color};
  border-radius: 5px;
  padding: 30px 0px;
  margin: 40px 20px;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    transition: transform 0.5s ease;
  }
`

const ContributionImg = styled.img`
  width: 200px;
  border-radius: 60%;
  box-shadow: 0px 0px 15px 8px ${props => props.theme.primary1.color};
`;

const Content = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  font-family: 'Helvetica, Arial, sans-serif';
  font-size: 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`

const StyledIcon = styled.a`
  color: black;
  font-size: 60px;
  margin: 5px;

  &:hover {
    color: ${props => props.theme.primary1.color};
    transition: color 0.5 ease;
  }
`


const ContributorCard: React.FC<ContributorCardProps> = ({ contributorName, contributorGitHub, contributorLinkedIn, contributorImage, content }) => {
  return (
    <>
      <ContributorCardContainer>
        
        <ContributionImg src={contributorImage} alt="Avatar" />
        
        <h1>{contributorName}</h1>

        <Content>
          {content}
        </Content>

        <IconWrapper>

          <StyledIcon href={contributorGitHub} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </StyledIcon>

          <StyledIcon href={contributorLinkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledIcon>

        </IconWrapper>
        

      </ContributorCardContainer>
    </>
  )
};

export default ContributorCard;