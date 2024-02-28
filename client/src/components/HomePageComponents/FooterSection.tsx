import React from "react";
import styled from "styled-components";
import GitHubDiscordSection from "./GitHubDiscordSection";
import ContactForm from "./ContactForm";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #75472f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #f0ead2, #adc178, #adc178, #6c584c);
  height: 80vh;
  color: white;
  position: relative;
`;

const DividerLine = styled.div`
  width: 2px;
  height: 70px;
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FooterHeading = styled.h1`
  color: #ffffff;
  text-shadow: #474747 3px 2px 2px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const FooterSection: React.FC = () => {
  return (
    <FooterContainer>
      <FooterHeading>Looking for ways to contribute?</FooterHeading>
      <DividerLine />
      <ContentContainer>
        <GitHubDiscordSection />
        <ContactForm />
      </ContentContainer>
    </FooterContainer>
  );
};

export default FooterSection;
