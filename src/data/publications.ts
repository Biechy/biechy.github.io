// Docusaurus n'autorise pas pouvoir faire des requêtes pour récupérer les metadonnées des postes, il faut donc les importer soit même

import { Publication } from "../components/types";

export const publications: Publication[] = [
  {
    title: "A Lightweight Recurrent Architecture for Robust Urban Traffic Forecasting With Missing Data",
    description: {
      en: "We introduce an enhanced recurrent models : Extended Gated Recurrent Unit (xGRU) which incorporate exponential gating mechanisms and matrix-valued memory updates inspired by xLSTM.",
    },
    authors: [
      {
        name: "Biechy",
        permalink: "/publications/authors/all-biechy-articles",
      },
    ],
    date: "2025-08",
    link: "https://ieeexplore.ieee.org/document/11162586",
    tags: ["DL"],
    letter: "gamma",
  },
];
