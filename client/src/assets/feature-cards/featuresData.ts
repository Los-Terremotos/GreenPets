import IDP1 from './IDP1.jpg';
import IDP2 from './IDP2.jpg';
import IDP3 from './IDP3.jpg';
import IDP4 from './IDP4.jpg';
import ODP1 from './ODP1.jpg';
import ODP2 from './ODP2.jpg';
import ODP3 from './ODP3.jpg';
import ODP4 from './ODP4.jpg';
import { FeaturesContent } from '../../../types';

const featuresData: FeaturesContent[] = [
  {
    id: 0,
    overlayTitle: 'Personalized Plant Recommendations',
    overlayImage: ODP1,
    cardContent: 'You will receive tailored plant recommendations based on your preferences and gardening expertise. This ensures you discover plants that align with your desired indoor/outdoor environment and match your skill level, enhancing the likelihood of successful plant care.',
    cardImage: IDP1,
  },
  {
    id: 1,
    overlayTitle: 'Effortless Plant Selection',
    overlayImage: ODP2,
    cardContent: `Our short questionnaire simplifies the plant selection process, making it easy for you to find the perfect plant match. By focusing on just two key factors, you can quickly navigate and choose plants that suit you specific needs without overwhelming choices.`,
    cardImage: IDP2,
  },
  {
    id: 2,
    overlayTitle: 'User-Friendly Plant Exploration',
    overlayImage: ODP3,
    cardContent: `You can explore recommended plants in a user-friendly interface, enabling you to inspect each plant visually. This intuitive exploration allows you to make informed decisions about which plants appeal to you aesthetically and align with your personal taste, contributing to a positive overall user experience.`,
    cardImage: IDP3,
  },
  {
    id: 3,
    overlayTitle: 'In-Depth Plant Information',
    overlayImage: ODP4,
    cardContent: `You have the option to access detailed information about each recommended plant. This feature empowers you with knowledge about the characteristics, care requirements, and any additional insights for the chosen plant. Providing comprehensive information encourages you to make well-informed decisions and boosts your confidence in caring for the selected plants.`,
    cardImage: IDP4,
  }
];

export default featuresData;