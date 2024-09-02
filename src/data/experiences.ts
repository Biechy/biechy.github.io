import { Experience } from "@site/src/components/types";

export const experiences: Experience[] = [
  {
    title: "AI Researcher (PhD)",
    company: {
      name: "Institut National de Recherche en Informatique et en Automatique",
      link: "https://www.inria.fr/",
      logo: "./img/logo/inria.png",
    },
    date: {
      start: "2024",
      end: null,
      information: null,
    },
    location: "Palaiseau, France",
    description: "Create a privacy enhancement tool for content using LLMs.",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Metric creation",
      "LLM",
      "Fine-tuning",
      "Privacy",
    ],
  },
  {
    title: "AI Researcher (internship)",
    company: {
      name: "National Center of High-performance Computing",
      link: "https://www.nchc.org.tw/",
      logo: "./img/logo/nchc.png",
    },
    date: {
      start: "2024",
      end: "2024",
      information: "5 months",
    },
    location: "Hsinchu, Taiwan",
    description:
      "Create and implement deep learning networks to improve traffic forcasting of Taichung.",
    results:
      "Improved traffic forcasting accuracy by two. Creation of a new model state of the art named xGRU (inspired by xLSTM and GRU). Paper in progress...",
    tags: [
      "Research",
      "Time Series Forecasting",
      "Deep Learning",
      "xLSTM",
      "xGRU",
      "Python",
      "PyTorch",
    ],
  },
  {
    title: "Data Engineer (internship)",
    company: {
      name: "Exotrail",
      link: "https://www.exotrail.com/",
      logo: "./img/logo/exotrail.png",
    },
    date: {
      start: "2023",
      end: "2023",
      information: "6 months",
    },
    location: "Massy, France",
    description:
      "Create and implement a data processing pipeline, from test bench trials to computer analysis on employees' computers.",
    results:
      "Every 15 minutes, the data is processed, stored without duplication in two separate databases (production or development) and can be loaded onto IT tools. Data can be processed retrospectively.",
    tags: ["Data", "Pipeline", "Docker", "Python", "MongoDB", "Apache Nifi"],
  },
];
