import React from "react";
import styled from "styled-components";

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactForm: React.FC = () => {
  return (
    <RightSection>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" rows={5} required />
        </FormGroup>
        <SubmitButton>Submit</SubmitButton>
      </FormContainer>
    </RightSection>
  );
};

export default ContactForm;
