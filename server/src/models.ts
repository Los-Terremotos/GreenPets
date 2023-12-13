export type PlantListModel = {
  id: number;
  common_name: string;
  watering: string;
  default_image: ImageUrlModel;
}

export type PlantDetailsModel = {
  id: string;
  common_name: string;
  scientific_name: string[];
  sunlight: string[];
  type: string;
  cycle: string;
  watering: string;
  depth_water_requirement: MeasurementsModel;
  volume_water_requirement: MeasurementsModel;
  water_period: string;
  watering_general_benchmark: MeasurementsModel;
  dimensions: DimensionsModel;
  poisonous_to_humans: boolean; 
  poisonous_to_pets: boolean; 
  drought_tolerant: boolean; 
  tropical: boolean; 
  indoor: boolean; 
  flowering_season: string;
  care_level: string;
  description: string;
  default_image: ImageUrlModel;
  pruning_month: string[]; 
  attracts: string[]; 
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
  }

export type UserInfoModel = {
    id: string;
    userName: string;
    userLocation: string;
    userPassword: string;
    favoritePlants: [string];
  }