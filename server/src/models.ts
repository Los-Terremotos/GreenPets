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
  dimension: string;
  cycle: string;
  propagation: string[];
  sunlight: string[];
  pruning_month: string[];
  maintenance: string;
  care_guides: string;
  growth_rate: string;
  thorny: boolean;
  invasive: boolean;
  care_level: string;
  flowers: boolean;
  flower_color: string;
  cones: boolean;
  fruits: boolean;
  edible_fruit: boolean;
  fruit_color: string[];
  harvest_season: string;
  leaf: boolean;
  leaf_color: string[];
  edible_leaf: boolean;
  cuisine: boolean;
  medicinal: boolean;
  poisonous_to_humans: boolean;
  poisonous_to_pets: boolean;
  description: string;
};

export type ImageUrlModel = {
  thumbnail: string;
};

export type UserInfoModel = {
  id: string;
  userName: string;
  userLocation: string;
  userPassword: string;
  favoritePlants: [string];
};