import { TabDataMapping } from '../../../types';

const tabDataMapping: TabDataMapping = {
  "Overview": [
    "common_name",
    "scientific_name",
    "other_name",
    "family",
    "origin", 
    "type", 
    "dimension",
    "dimensions",
    "description", 
    "default_image"
  ],
  "Care Details": [
    "watering",
    "depth_water_requirement",
    "volume_water_requirement",
    "watering_period",
    "watering_general_benchmark",
    "sunlight", 
    "soil",
    "pruning_month",
    "pruning_count"
  ],
  "Growth & Propagation": [
    "growth_rate", 
    "cycle", 
    "propagation", 
    "hardiness",
    "seeds"
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
  "Environmental Preferences": [
    "indoor", 
    "tropical",
    "hardiness_location"
  ],
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
  ],
  "Additional Resources": [
    "care_guides", 
    "maintenance",
    "care_level"
  ]
};

export default tabDataMapping;