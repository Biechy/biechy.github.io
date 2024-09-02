// Docusaurus n'autorise pas pouvoir faire des requêtes pour récupérer les metadonnées des postes, il faut donc les importer soit même

import { Publication } from "../components/types";

export const publications: Publication[] = [
  {
    title: "Vehicule Trafic Forecasting in Taichung",
    description: {
      en: "In coming...",
    },
    authors: [
      {
        name: "Biechy",
        permalink: "/publications/authors/all-biechy-articles",
      },
    ],
    date: "2021-01-01",
    link: "https://github.com",
    tags: ["DL"],
    letter: "gamma",
  },
];
