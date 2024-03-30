import { TabDataMapping } from '../../../types';

const tabDataMapping: TabDataMapping = {
  "Overview": [
    "common_name",
    "scientific_name",
    "family",
    "origin", 
    "dimension",
    "description",
  ],
  "Care Details": [
    "sunlight", 
    "pruning_month",
    "care_guides", 
    "maintenance",
    "care_level",
  ],
  "Growth & Propagation": [
    "growth_rate", 
    "cycle", 
    "propagation", 
  ],
  "Healthy & Safety": [
    "thorny", 
    "poisonous_to_humans", 
    "poisonous_to_pets",
    "medicinal",
    "invasive"
  ],
  "Flower & Fauna": [
    "flowers",
    "flower_color",
    "cones",
    "fruits",
    "edible_fruit", 
    "cuisine", 
  ]
};

export default tabDataMapping;