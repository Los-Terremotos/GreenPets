"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
                    PlantList: "./models#PlantList",
                    PlantDetails: "./models#PlantDetails",
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
exports.default = config;
