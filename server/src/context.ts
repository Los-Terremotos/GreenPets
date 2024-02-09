import { PlantBasic, PlantExpanded } from "./datasources/plants-api";

export type DataSourceContext = {
  dataSources: {
    plantBasic: PlantBasic;
    plantExpanded: PlantExpanded;
  }
};