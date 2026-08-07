// Secteurs desservis par Binette & Dionne — Centre-du-Québec
// (MRC d'Arthabaska et MRC de l'Érable) + secteurs limitrophes.
// Utilisé par la liste déroulante (RegionSelect) et par /api/lead (id → nom).

export interface RegionOption {
  id: string;
  name: string;
}

export const REGIONS: RegionOption[] = [
  // Pôles principaux
  { id: "victoriaville", name: "Victoriaville" },
  { id: "warwick", name: "Warwick" },
  { id: "princeville", name: "Princeville" },
  { id: "plessisville", name: "Plessisville" },
  { id: "daveluyville", name: "Daveluyville" },
  { id: "kingsey-falls", name: "Kingsey Falls" },

  // MRC d'Arthabaska
  { id: "saint-christophe-darthabaska", name: "Saint-Christophe-d'Arthabaska" },
  { id: "saint-norbert-darthabaska", name: "Saint-Norbert-d'Arthabaska" },
  { id: "tingwick", name: "Tingwick" },
  { id: "saint-remi-de-tingwick", name: "Saint-Rémi-de-Tingwick" },
  { id: "chesterville", name: "Chesterville" },
  { id: "sainte-clotilde-de-horton", name: "Sainte-Clotilde-de-Horton" },
  { id: "sainte-seraphine", name: "Sainte-Séraphine" },
  { id: "sainte-elizabeth-de-warwick", name: "Sainte-Élizabeth-de-Warwick" },
  { id: "saints-martyrs-canadiens", name: "Saints-Martyrs-Canadiens" },
  { id: "notre-dame-de-ham", name: "Notre-Dame-de-Ham" },
  { id: "ham-nord", name: "Ham-Nord" },
  { id: "saint-louis-de-blandford", name: "Saint-Louis-de-Blandford" },
  { id: "saint-samuel", name: "Saint-Samuel" },
  { id: "saint-valere", name: "Saint-Valère" },
  { id: "saint-rosaire", name: "Saint-Rosaire" },
  { id: "sainte-anne-du-sault", name: "Sainte-Anne-du-Sault" },
  { id: "saint-albert", name: "Saint-Albert" },
  { id: "maddington-falls", name: "Maddington Falls" },

  // MRC de l'Érable
  { id: "lyster", name: "Lyster" },
  { id: "laurierville", name: "Laurierville" },
  { id: "inverness", name: "Inverness" },
  { id: "saint-ferdinand", name: "Saint-Ferdinand" },
  { id: "villeroy", name: "Villeroy" },
  { id: "notre-dame-de-lourdes", name: "Notre-Dame-de-Lourdes" },
  { id: "sainte-sophie-dhalifax", name: "Sainte-Sophie-d'Halifax" },
  { id: "saint-pierre-baptiste", name: "Saint-Pierre-Baptiste" },

  // Secteurs limitrophes
  { id: "drummondville", name: "Drummondville" },
  { id: "saint-cyrille-de-wendover", name: "Saint-Cyrille-de-Wendover" },
  { id: "saint-leonard-daston", name: "Saint-Léonard-d'Aston" },

  // Filet de sécurité
  { id: "autre", name: "Autre secteur / ailleurs" },
];

// Centre approximatif (Victoriaville) pour la carte décorative du hero.
export const REGION_CENTER: [number, number] = [46.05, -71.96];
