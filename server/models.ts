export type PlantListModel = {
  id: string;
  common_name: string;
  watering: string;
}

export type PlantDetailsModel = {
  id: string;
  common_name: string;
  scientific_name: [string];
  sunlight: [string];
  type: string;
  cycle: string;
  watering: string;
  water_period: string;
  poisonous_to_humans: Boolean;
  poisonous_to_pets: Boolean;
  drought_tolerant: Boolean;
  tropical: Boolean;
  indoor: Boolean;
  flowering_season: string;
  care_level: string;
  description: string;
  default_image: string;
  pruning_month: [string];
  attracts: [string];
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
    value: number;
  }

export type UserInfoModel = {
    id: string;
    userName: string;
    userLocation: string;
    userPassword: string;
    favoritePlants: [string];
  }