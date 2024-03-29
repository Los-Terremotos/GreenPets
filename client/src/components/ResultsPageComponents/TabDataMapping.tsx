import { TabDataMapping } from '../../../types';

const tabDataMapping: TabDataMapping = {
  "Overview": [
    "common_name",
    "scientific_name",
    "family",
    "origin", 
    "dimension",
    "description",
    //"type",
    //"dimensions", 
    //"default_image"
  ],
  "Care Details": [
    "sunlight", 
    "soil",
    "pruning_month",
    "care_guides", 
    "maintenance",
    "care_level",
    //"pruning_count",
    //"watering",
    //"depth_water_requirement",
    //"volume_water_requirement",
    //"watering_period",
    //"watering_general_benchmark",
  ],
  "Growth & Propagation": [
    "growth_rate", 
    "cycle", 
    "propagation", 
    //"hardiness",
    //"seeds"
  ],
  "Healthy & Safety": [
    "pest_susceptibility", 
    "drought_tolerance", 
    "salt_tolerance", 
    "thorny", 
    "poisonous_to_humans", 
    "poisonous_to_pets",
    "medicinal",
    "invasive"
  ],
  // "Environmental Preferences": [
  //   //"hardiness_location"
  //   //"indoor", 
  //   //"tropical",
  // ],
  "Flora & Fauna": [
    "plant_anatomy",
    "flowers",
    "flowering_season",
    "flower_color",
    "cones",
    "fruits",
    "edible_fruit", 
    "cuisine", 
    "attracts"
  ]
};

export default tabDataMapping;