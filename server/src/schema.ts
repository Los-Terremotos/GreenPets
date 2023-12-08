import gql from "graphql-tag";

export const typeDefs = gql`

"Initial plant info, which contains very basic information"
  type PlantList {
    id: ID!
    common_name: String
    watering: String
    default_image: ImageUrl
  }

  "Additional plant info which contains more more specific information on plants"
  type PlantDetails {
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
  type ImageUrl {
    thumbnail: String
  }

  "Range of possible plant dimensions"
  type Dimensions {
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

  type Query {
    "Query to get basic plant info"
    plantsBasicInfo(inputNumber: Int!, inputString: String!): [PlantList]
    "Query to get more specific plant info for a single plant"
    plantsMoreInfo(id: String!): PlantDetails
  }
`;
