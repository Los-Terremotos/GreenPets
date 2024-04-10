import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  phoneImg,
  favoriteImg,
  registerImg,
  testingImg,
  icon,
} from "../../assets";
import { RoadmapCardProps } from "../../../types";
import RoadmapCard from "../RoadmapCard";

const roadmapContent: RoadmapCardProps[] = [
  {
    image: registerImg,
    subtitle: "Enhanced Interaction",
    content:
      "In the upcoming phases of our project, we're introducing user registration functionality. This will empower you to create a personalized account, allowing seamless logins and providing a dedicated space to effortlessly manage and monitor the well-being of your plants.",
    icon: icon,
  },
  {
    image: favoriteImg,
    subtitle: "Personalized Plant Library",
    content:
      "Anticipate the ability to curate your own botanical haven! Soon, you'll be able to save and organize your favorite plants within the app. This feature ensures easy access to vital care information and fascinating facts about each plant you hold dear.",
    icon: icon,
  },
  {
    image: testingImg,
    subtitle: "Ensuring Reliability",
    content:
      "Stepping up our commitment to delivering a robust application, we're in the process of implementing comprehensive unit and integration testing. This meticulous testing approach ensures that every feature functions seamlessly, providing you with a reliable and enjoyable experience.",
    icon: icon,
  },
  {
    image: phoneImg,
    subtitle: "Responsive Accessibility",
    content:
      "We're actively developing a responsive design to make your plant care experience truly mobile-friendly. Regardless of the device you use, the application will adapt effortlessly, ensuring that all your favorite plants and their care details are just a tap away. Enjoy the convenience of plant care, anytime, anywhere!",
    icon: icon,
  },
];

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.primary1.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  align-items: flex-start; 

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.primary1.color};
    background-color: ${(props) => props.theme.secondary1.color};
    padding: 10px 30px;
    border-radius: 10px;
    transition: background-color 0.5s ease, color 0.5s ease;

    @media(max-width:425px){
      font-size:3rem;
    }
  }

  @media (max-width: 960px) {
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  flex-wrap: wrap;
  
  h3 {
    margin-bottom: 20px;
    margin-top: 15px;
    font-size: 25px;
    color: ${(props) => props.theme.secondary2.color};
  }

  p {
    font-size: 17px;
    color: ${(props) => props.theme.secondary1.color};
  }
`;

const RoadmapCardCont = styled.div`
  display: flex;
  color: #333232;
`;

const RoadmapFooter = styled.div`
  width: 100%;
  display: flex;    
  font-size: 1.5rem;
  color:${(props) => props.theme.secondary1.color};
  align-items: center;
  justify-content: center;
`

const Roadmap = () => {
  return (
    <Container>
      <GlobalStyle />
      <h1>Roadmap</h1>
      <RoadmapCardCont>
        <ImgContainer>
          {roadmapContent.map((card, i) => (
            <RoadmapCard
              image={card.image}
              subtitle={card.subtitle}
              content={card.content}
              icon={card.icon}
              key = {`card-${i}`}
            />
          ))}
        </ImgContainer>
      </RoadmapCardCont>
      <RoadmapFooter>
          <h3><i>Want a sneak peek? Click to uncover our upcoming features!</i></h3>
        </RoadmapFooter>
    </Container>
  );
};

export default Roadmap;
