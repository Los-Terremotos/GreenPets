import { PlantBasic, PlantExpanded } from "./datasources/plants-api.ts";

export type DataSourceContext = {
  dataSources: {
    plantBasic: PlantBasic;
    plantExpanded: PlantExpanded;
  }
};