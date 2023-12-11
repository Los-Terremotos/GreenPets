import React from "react";
import { useAppSelector, useAppDispatch } from "../../Hooks/hooks";
import { indoor } from "./plantTypeSlice";

export function PlantType() {
  const type = useAppSelector((state) => state.plantType.value)
  const dispatch = useAppDispatch;

}