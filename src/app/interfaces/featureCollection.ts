
// Define la interfaz para la FeatureCollection
export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}


// Define la interfaz para un Feature
export interface Feature {
  id:string;
  type: 'Feature';
  geometry: Point;
  properties: Properties;
}

// Define la interfaz para la geometría de tipo Point
export interface Point {
  type: 'Point';
  coordinates: Coordinates;
}
 
// Define un tipo genérico para las coordinates
export type Coordinates = [number, number];

// Define la interfaz para las Properties
export interface Properties {
  name: string;
  category: string;
}


