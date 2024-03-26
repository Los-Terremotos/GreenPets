//import { StringValueNode } from "graphql";
import { ReactNode } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
// import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";

export interface OptionsType {
  text: string,
  value: string | number
}

export interface QuestionsType {
  name: string,
  question: string,
  options: Array<OptionsType>,
  isAnswered: boolean | null
}

export interface plant {
  id: string;
  common_name?: string;
  default_image?: {
    thumbnail: string;
  } | null; 
  watering?: string;
}

export interface Response {
  indoor: string,
  watering: number,
  [key: string]: string | number
}

export interface StyledNavProps {
  isNavbarVisible: boolean;
  children: ReactNode;
}

export interface ReviewsContent {
  id: number,
  userName: string,
  userImage: string,
  content: string,
  userTitle: string;
}

export interface ReviewCardProps {
  userName: string;
  userImage: string;
  content: string;
  userTitle: string;
}

export interface FeaturesContent {
  id: number;
  overlayTitle: string;
  overlayImage: string;
  cardContent: string;
  cardImage: string;
}

export interface FeatureCardProps {
  overlayTitle: string;
  overlayimage: string;
  cardContent: string;
  cardimage: string;
}

export interface ContributorCardProps {
  id: number;
  contributorName: string;
  contributorGitHub: string;
  contributorLinkedIn: string;
  contributorImage: string;
  content: string;
}
export interface plant {
  id: string;
  common_name?: string;
  default_image?: {
    thumbnail: string;
  } | null; 
  watering?: string;
}

// // Original interface
// export interface PlantInfo {
//   id: string;
//   scientific_name: string;
//   sunlight: string;
//   watering: string;
//   poisonous_to_pets: string;
//   indoor: string;
//   care_level: string;
//   description: string;
// }

export interface PlantInfo {
  id: string;
  common_name: string;
  scientific_name: string;
  other_name: string[];
  family: string;
  origin: string[];
  type: string;
  dimension: string;
  dimensions: Dimensions;
  cycle: string;
  attracts: string[];
  propagation: string[];
  hardiness: HardinessMeasurements;
  hardiness_location: HardinessLocation;
  watering: string;
  depth_water_requirement: Water;
  volume_water_requirement: Water;
  watering_period: string;
  watering_general_benchmark: Water;
  plant_anatomy: Anatomy[];
  sunlight: string[];
  pruning_month: string[];
  pruning_count: Pruning;
  seeds: GLfloat;
  maintenance: string;
  care_guides: string;
  soil: string[];
  growth_rate: string;
  drought_tolerant: boolean;
  salt_tolerant: boolean;
  thorny: boolean;
  invasive: boolean;
  tropical: boolean;
  indoor: boolean;
  care_level: string;
  flowers: boolean;
  flowering_season: string;
  flower_color: string;
  cones: boolean;
  fruits: boolean;
  edible_fruit: boolean;
  cuisine: boolean;
  medicinal: boolean;
  poisonous_to_humans: boolean;
  poisonous_to_pets: boolean;
  description: string;
  default_image: ImageUrl;
}

export interface RoadmapCardProps {
  image: string;
  subtitle: string;
  content: string;
  icon: string[];
}

export interface TabDataMapping {
  "Overview": string[];
  "Care Details": string[];
  "Growth & Propagation": string[];
  "Healthy & Safety": string[];
  "Environmental Preferences": string[];
  "Flora & Fauna": string[];
  "Additional Resources": string[];
}

export interface Dimensions {
  type: string;
  min_value: GLfloat;
  max_value: GLfloat;
  unit: string;
}

export interface HardinessMeasurements {
  min: string;
  max: string;
}

export interface HardinessLocation {
  full_url: string;
  full_iframe: string;
}

export interface Water {
  unit: string;
  value: string;
}

export interface Anatomy {
  part: string;
  color: string[];
}

export interface Pruning {
  amount: GLfloat;
  interval: string;
}

export interface Measurements {
  unit: string;
  minValue: GLfloat;
  maxValue: GLfloat;
}

export interface ImageUrl {
  thumbnail: string;
}