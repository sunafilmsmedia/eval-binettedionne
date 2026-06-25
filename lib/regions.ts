import type { Region } from "./types";

export interface RegionWithLabel extends Region {
  // Direction du tooltip Leaflet pour éviter les chevauchements
  // entre marqueurs proches.
  labelDir: "top" | "bottom" | "left" | "right";
}

// Secteurs couverts par Binette & Dionne (Victoriaville et le Centre-du-Québec —
// MRC d'Arthabaska et MRC de l'Érable).
// TODO : faire valider/compléter cette liste par le courtier.
export const REGIONS: RegionWithLabel[] = [
  { id: "victoriaville",       name: "Victoriaville",        lat: 46.0578, lng: -71.9610, labelDir: "top" },
  { id: "saint-christophe",    name: "Saint-Christophe",     lat: 46.0290, lng: -71.9300, labelDir: "right" },
  { id: "warwick",             name: "Warwick",              lat: 45.9540, lng: -71.9760, labelDir: "left" },
  { id: "tingwick",            name: "Tingwick",             lat: 45.9050, lng: -71.9420, labelDir: "bottom" },
  { id: "kingsey-falls",       name: "Kingsey Falls",        lat: 45.8470, lng: -72.0660, labelDir: "left" },
  { id: "princeville",         name: "Princeville",          lat: 46.1700, lng: -71.8810, labelDir: "right" },
  { id: "plessisville",        name: "Plessisville",         lat: 46.2230, lng: -71.7770, labelDir: "right" },
  { id: "daveluyville",        name: "Daveluyville",         lat: 46.1990, lng: -72.1370, labelDir: "top" },
  { id: "saint-albert",        name: "Saint-Albert",         lat: 46.0270, lng: -72.0840, labelDir: "left" },
  { id: "chesterville",        name: "Chesterville",         lat: 46.0490, lng: -71.7770, labelDir: "right" },
  { id: "sainte-clotilde",     name: "Sainte-Clotilde",      lat: 45.9600, lng: -72.1290, labelDir: "left" },
];

// Centre approximatif pour la carte de fond (décorative).
export const REGION_CENTER: [number, number] = [46.04, -71.95];

// Bounds englobant tous les secteurs avec padding pour la carte interactive.
export const REGION_BOUNDS: [[number, number], [number, number]] = [
  [45.81, -72.20], // sud-ouest (englobe Kingsey Falls et Daveluyville)
  [46.26, -71.72], // nord-est (englobe Plessisville et Chesterville)
];
