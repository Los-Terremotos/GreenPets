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
    type: String
    dimension: String
    dimensions: Dimensions
    cycle: String
    attracts: [String]
    propagation: [String]
    hardiness: HardinessMeasurements
    hardiness_location: HardinessLocation
    watering: String
    depth_water_requirement: Water
    volume_water_requirement: Water
    watering_period: String
    watering_general_benchmark: Water
    plant_anatomy: [Anatomy]
    sunlight: [String]
    pruning_month: [String]
    pruning_count: Pruning
    seeds: Float
    maintenance: String
    care_guides: String
    soil: [String]
    growth_rate: String
    drought_tolerant: Boolean
    salt_tolerant: Boolean
    thorny: Boolean
    invasive: Boolean
    tropical: Boolean
    indoor: Boolean
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
    default_image: ImageUrl
  }
  
"Used to retrieve the image URL associated with the plant"
  type ImageUrl {
    thumbnail: String
  }

"Range of possible plant dimensions"
  type Dimensions {
    type: String
    min_value: Float
    max_value: Float
    unit: String
  }

"Measurements of plant hardiness"
  type HardinessMeasurements {
    min: String
    max: String
  }

"Hardiness location image"
  type HardinessLocation {
    full_url: String
    full_iframe: String
  }

"Water measurements"
  type Water {
    unit: String
    value: String
  }

"Provides a visual desciption of the plant"
  type Anatomy {
    part: String
    color: [String]
  }

"Provides the amount and how often plants can be pruned"
  type Pruning {
    amount: Float
    interval: String
  }

"Measurements of the plant"
  type Measurements {
    unit: String
    minValue: Float
    maxValue: Float
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