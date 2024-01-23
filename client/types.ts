import { ReactNode } from "react";

export interface QuestionsType {
  name: string,
  question: string,
  options: Array<string>
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