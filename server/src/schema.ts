import gql from 'graphql-tag';

export const typeDefsForUsers = gql `
  type ResponseFromWeatherApp {

  }

  type ResponseFromPlantApp {

  }

  type UserInfo {

  }
`

export const typeDefsForWeather = gql`
  type WeatherApi {

  }
`

export const typeDefsForPlants = gql`
  type PlantApi {
    
  }
`