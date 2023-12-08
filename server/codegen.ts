
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schema.ts",
  // documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          PlantList: "./models#PlantListModel",
          PlantDetails: "./models#PlantDetailsModel",
          ImageUrlModel: "./models#ImageUrlModel",
          DimensionsModel: "./models#DimensionsModel",
          MeasurementModel: "./models#MeasurementModel",
          UserInfoModel: "./models#UserInfoModel",
        },
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
