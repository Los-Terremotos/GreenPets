export type PlantListModel = {
  id: number;
  common_name: string;
  watering: string;
  default_image: ImageUrlModel;
};

export type PlantDetailsModel = {
  id: string;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  family: string;
  origin: string[];
  type: string;
  dimension: string;
  dimensions: DimensionsModel;
  cycle: string;
  attracts: string[];
  propagation: string[];
  hardiness: HardinessMeasurementsModel;
  hardiness_location: HardinessLocationModel;
  watering: string;
  depth_water_requirement: WaterModel;
  volume_water_requirement: WaterModel;
  water_period: string;
  watering_general_benchmark: WaterModel;
  plant_anatomy: AnatomyModel[];
  sunlight: string[];
  pruning_month: string[];
  pruning_count: PruningModel;
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
  fruit_color: string[];
  harvest_season: string;
  leaf: boolean;
  leaf_color: string[];
  edible_leaf: boolean;
  medicinal: boolean;
  poisonous_to_humans: boolean;
  poisonous_to_pets: boolean;
  description: string;
  default_image: ImageUrlModel;
};

export type ImageUrlModel = {
  thumbnail: string;
};

export type DimensionsModel = {
  type: string;
  min_value: number;
  max_value: number;
  unit: string;
};

export type MeasurementsModel = {
  unit: string;
  minValue: number;
  maxValue: number;
};

export type UserInfoModel = {
  id: string;
  userName: string;
  userLocation: string;
  userPassword: string;
  favoritePlants: [string];
};

export type HardinessMeasurementsModel = {
  min: string;
  max: string;
};

export type HardinessLocationModel = {
  full_url: string;
  full_iframe: string;
};


export type WaterModel = {
  unit: string;
  value: string;
};

export type AnatomyModel = {
  part: string;
  color: string[];
};

export type PruningModel = {
  amount: GLfloat;
  interval: String;
};
