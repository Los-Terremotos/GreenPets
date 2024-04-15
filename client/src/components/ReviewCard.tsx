import React from 'react';
import styled from 'styled-components';
import { ReviewCardProps } from '../../types';


const CardContainer = styled.div`
  min-height: 300px;
  height: 350px;
  width: 350px;
  background-color: floralwhite;
  box-shadow: 5px 5px 5px ${props => props.theme.secondary1.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 80px;
  padding-bottom: 40px;
  border-radius: 5px;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    transition: transform 0.5s ease;
  }

  @media (max-width: 960px) {
    min-height: 280px;
    // width: 330px;
    width: 90%;
    max-width: 330px;
    // width: 100%;
    margin-top: 60px;
  }
`;

const UserImgContainer = styled.div`
  height: 150px;
  width: 160px;
  position: absolute;
  top: -80px;
  z-index: 1;
  border-radius: 50%;
  background-color: ${props => props.theme.secondary1.color};
  transition: ${props => props.theme.transitions.backgrounColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 100px;
  flex: 1;
  font-family: 'Helvetica, Arial, sans-serif';
  font-size: 16px;
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
    line-height: 23px;
  }
`;

const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px 20px 0px;

  & h3 {
    margin: 0;
    color: ${props => props.theme.primary1.color};
    font-family: 'Helvetica, Arial, sans-serif';
    font-size: 1.75rem;
  }

  & p {
    margin: 0;
    font-family: serif;
    font-style: italic;
    font-size: 1.25rem;
  }
`;

const ReviewCard: React.FC<ReviewCardProps> = ({ userName, userImage, content, userTitle }) => {
  return (
    <CardContainer>
      
      <UserImgContainer>
        <UserImg src={userImage} alt="Avatar" />
      </UserImgContainer>
      
      <Content>
        <p>{content}</p>
      </Content>
      
      <UserTitle>
          <h3>{userName}</h3>
          <p>{userTitle}</p>
      </UserTitle>

    </CardContainer>
  );
};

export default ReviewCard;