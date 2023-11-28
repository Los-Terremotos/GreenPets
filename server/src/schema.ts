import gql from "graphql-tag";

export const typeDefsForUsers = gql`
"Weather API Schema"
  type ResponseFromWeatherApp {
    days: Temp!
    precip: Int!
  }

  "Weather API Temp type for temperature in Fahrenheit"
  type Temp {
    temp: Int!
  }

"Plant API Schema"
  type ResponseFromPlantApp {
    id: ID!
    common_name: String!
    scientific_name: [String]
    sunlight: [String]
    type: String
    cycle: String
    watering: String
    depth_water_requirement: Measurements
    volume_water_requirement: Measurements
    water_period: String
    watering_general_benchmark: Measurements
    dimensions: Dimensions
    poisonous_to_humans: Boolean
    poisonous_to_pets: Boolean
    drought_tolerant: Boolean
    tropical: Boolean
    indoor: Boolean
    flowering_season: String
    care_level: String
    description: String
    default_image: ImageUrl
    pruning_month: [String]
    attracts: [String] 
  }
  
  "Used to retrieve the image URL associated with the plant"
  type: ImageUrl {
    thumbnail: String
  }

  "Range of possible plant dimensions"
  type: Dimensions {
    type: String
    min_value: Int
    max_value: Int
    unit: String
  }

  "Measurements of the plant"
  type Measurements {
    unit: String
    value: Int
  }

  type UserInfo {
    id: ID!
    userName: String!
    userLocation: String!
    userPassword: String!
    favoritePlants: [String]
  }
`;

// export const typeDefsForWeather = gql`
//   type WeatherApi {

//   }
// `

// export const typeDefsForPlants = gql`
//   type PlantApi {

//   }
// `
