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
  width: 500px;
  background-color: floralwhite;
  box-shadow: 5px 5px 5px ${props => props.theme.secondary1.color};
  border-radius: 5px;
`

const ContributionImg = styled.img`
  width: 200px;
  border-radius: 60%;
`;

const Content = styled.div`
  margin-top: 100px;
  flex: 1;
  font-family: 'Helvetica, Arial, sans-serif';
  font-size: 25px;
  text-align: center;

  & > p {
    &:before {
      content: "\\201C"; // Unicode character for opening quotation mark
      font-size: 2rem;
      color: #f08080;
    }

    &:after {
      content: "\\201D"; // Unicode character for opening quotation mark
      color: #f08080;
      font-size: 2rem;
      position: absolute;
    }

    margin: 0 2rem;
    line-height: 20px;
  }

  @media (max-width: 960px) {
    margin-top: 55px;
    font-size: 0.98rem;
  }
`;


const ContributorCard: React.FC<ContributorCardProps> = ({ contributorName, contributorGitHub, contributorLinkedIn, contributorImage, content }) => {
  return (
    <>
      <ContributorCardContainer>
        
        <ContributionImg src={contributorImage} alt="Avatar" />
        
        <h1>{contributorName}</h1>

        <Content>
          {content}
        </Content>

        <div className="contribution-icons">
          <ul>
            <li>
              {" "}
              <a href={contributorGitHub}>
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faGithub}
                  style={{ color: "black" }}
                />
              </a>
            </li>
            <li>
              <a href={contributorLinkedIn}>
                <FontAwesomeIcon
                  className="icon"
                  icon={faLinkedin}
                  style={{ color: "black" }}
                />
              </a>
            </li>
          </ul>
        </div>

      </ContributorCardContainer>
    </>
  )
};

export default ContributorCard;