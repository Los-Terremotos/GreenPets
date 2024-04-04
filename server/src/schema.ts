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
    other_name: [String]
    family: String
    origin: [String]
    dimension: String
    cycle: String
    propagation: [String]
    sunlight: [String]
    pruning_month: [String]
    maintenance: String
    care_guides: String
    growth_rate: String
    thorny: Boolean
    invasive: Boolean
    care_level: String
    flowers: Boolean
    flowering_season: String
    flower_color: String
    cones: Boolean
    fruits: Boolean
    edible_fruit: Boolean
    fruit_color: [String]
    harvest_season: String
    leaf: Boolean
    leaf_color: [String]
    edible_leaf: Boolean
    cuisine: Boolean
    medicinal: Boolean
    poisonous_to_humans: Boolean
    poisonous_to_pets: Boolean
    description: String
  }

  "Used to retrieve the image URL associated with the plant"
  type ImageUrl {
    thumbnail: String
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