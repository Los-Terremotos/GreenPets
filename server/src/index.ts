import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";


const mocks = {
  Query: () => ({
    testPlant: () => [...new Array(1)]!
  }),
  Plant: () => ({
    id: "plant_01",
    common_name: "Dan-De-Lion",
    scientific_name: ["Dan-De-Lioness"],
    sunlight: ["Lots"],
    type: "Flower",
    cycle: "Spring",
    watering: "Often",
    depth_water_requirement: {
        unit: "inches",
        value: 5
    },
    volume_water_requirement:  {
        unit: "cup",
        value: 11
      },
    water_period: "Daily",
    watering_general_benchmark: {
        unit: "cup",
        value: 1
      },
    dimensions: {
        type: "Cool",
        min_value: 2,
        max_value: 5,
        unit: "inches"
    },
    poisonous_to_humans: true,
    poisonous_to_pets: false,
    drought_tolerant: true,
    tropical: true,
    indoor: true,
    flowering_season: "Spring",
    care_level: "Low",
    description: "Beautiful flower",
    default_image: {
      thumbnail: "https://www.health.com/thmb/AADrlQdpWITCjFjKnfBnqWy5A8w=/2153x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dandelion-d5aed7a95a6f4b16a3e954aa78694626.jpg"
    },
    pruning_month: ["June"],
    attracts:["People"] 
  }),
  UserInfo: () => ({
    id: 7894564,
    userName: "ProfessorKevin",
    userLocation:  "Palm Springs, CA",
    userPassword: "IloveDandelions",
    favoritePlants: ["Dandelions", "Broccoli"]
  }),
  Weather: () => ({
    days: {
      temp: 80
    },
    precip: 2
  }),
}



async function startApolloServer() {
  const server = new ApolloServer({ 
    //for mocking data:
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    })
  });
  
  const { url } = await startStandaloneServer(server)
  console.log(`
  🌺 Server is running!
  🪴 Query at ${url}
  `)
}
startApolloServer();
