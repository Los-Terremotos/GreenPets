import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";

export interface OptionsType {
  text: string,
  value: string | number
}

export interface QuestionsType {
  name: string,
  question: string,
  options: Array<OptionsType>
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
  overlayImage: string;
  cardContent: string;
  cardImage: string;
}
export interface plant {
  id: string;
  common_name?: string;
  default_image?: {
    thumbnail: string;
  } | null; 
  watering?: string;
}