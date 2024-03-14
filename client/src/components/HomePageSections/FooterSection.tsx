import React from "react";
import styled from "styled-components";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, ValidationError } from "@formspree/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.primary2.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  width: 100%;
  height: auto;
  padding: 50px 0px;

  @media (max-width: 900px) {
    padding-top: 100px;
  }
`;

const FooterHeading = styled.h1`
  color: ${(props) => props.theme.secondary1.color};
  justify-content: center;
  font-size: 4rem;
  background-color: ${(props) => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const FooterSubheading = styled.h3`
  color: ${(props) => props.theme.secondary1.color};
  justify-content: center;
  font-size: 1.5rem;
  
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledIcon = styled.a`
  color: ${(props) => props.theme.primary1.color};
  font-size: 60px;
  margin-left: 90px;
  margin-right: 90px;

  &:hover {
    color: ${(props) => props.theme.secondary1.color};
    transition: color 0.5 ease;
  }

  @media (max-width: 900px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  input[type="text"],
  input[type="email"] {
    width: 275px;
    font-size: 1rem;
    border-radius: 8px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
  }

  .input-row input[type="text"],
  .input-row input[type="email"] {
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px;
    border: 3px solid props => props.theme.primary1.color;
  }

  textarea {
    max-width: 800px;
    min-width: 150px;
    width: 100%;
    min-height: 100px;
    height: 150px;
    font-size: 1rem;
    border: 3px solid props => props.theme.primary1.color;
    margin: 16px 0;
    padding: 10px;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
  }

  button {
    background-color: ${(props) => props.theme.primary1.color};
    color: ${(props) => props.theme.secondary1.color};
    border-radius: 5px;
    margin-top: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 10px;
    font-size: 1rem;
    width: auto;
    font-family: 'Times New Roman', Times, serif;

    &:hover {
      background-color: ${(props) => props.theme.primary1.color};
      color: white;
      transform: scale(1.1);
    }
  }
`;

// formspree
const FooterSection: React.FC = () => {
  const email = "losterremotos101@gmail.com";
  const [state, handleSubmit] = useForm("xjvnrawn");

  return (
    <FooterContainer>
      <ContentContainer>
        <FooterHeading>Contact</FooterHeading>
        <FooterSubheading>
          Whether you're sowing seeds of collaboration or just want to <i>leaf
          </i> us a message, your garden awaits below.
        </FooterSubheading>
        <IconContainer>
          <a
            href="https://github.com/Los-Terremotos/GreenPets"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </a>

          <a
            href={`mailto:${email}`}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </StyledIcon>
          </a>

          <a
            href="https://discord.gg/FUjxpkVnUn"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledIcon>
              <FontAwesomeIcon icon={faDiscord} />
            </StyledIcon>
          </a>
        </IconContainer>

        {state.succeeded ? (
          <FooterSubheading>
            <h3>
            Hooray! Your message has been planted in our digital garden. <br/>
            We'll water it with attention and get back to you soon! 🌿
          </h3>
          </FooterSubheading>
          
        ) : (
          <FormContainer onSubmit={handleSubmit}>
              <label htmlFor="name"></label>
              <div className="input-row">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              /> <br/>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
          </FormContainer>
        )}
      </ContentContainer>
    </FooterContainer>
  );
};

function App() {
  return <FooterSection />;
}

export default App;
