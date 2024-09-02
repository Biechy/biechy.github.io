import { Education } from "@site/src/components/types";

export const educations: Education[] = [
  {
    degree: {
      title: "PhD in Artificial Intelligence",
      link: "https://edips.lisn.upsaclay.fr/",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "./img/logo/upsaclay.png",
      },
    ],
    date: {
      start: "2024",
      end: "2027",
    },
    location: "Paris, France",
    description:
      "Courses in computer science, artificial intelligence and developements.",
    tags: ["Machine Learning", "Deep Learning", "Computer Science", "MLOps"],
    honors: "none",
  },
  {
    degree: {
      title: "MSc in Mathematics (spec. in Artificial Intelligence)",
      link: "https://www.imo.universite-paris-saclay.fr/fr/etudiants/masters/mathematiques-et-applications/m2/m2-mathematique-et-intelligence-artificielle/",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "./img/logo/upsaclay.png",
      },
      {
        name: "CentraleSupélec",
        link: "https://www.centralesupelec.fr/",
        logo: "./img/logo/centralesupelec.png",
      },
    ],
    date: {
      start: "2022",
      end: "2024",
    },
    location: "Orsay, France",
    description:
      "One of the best programs in France for mathematics and artificial intelligence. Customisable program of shared courses with Polytechnique (Stat&ML) and ENS Paris-Saclay (MVA).",
    tags: ["Machine Learning", "Statistics", "Optimization", "Probability"],
    honors: "High Honors",
  },
  {
    degree: {
      title: "BSc Double Major in Mathematics and Physics Minor in Engineering",
      link: "https://www.universite-paris-saclay.fr/formation/licence-double-diplome/mathematiques-physique-et-sciences-pour-lingenieur",
    },
    school: [
      {
        name: "University of Paris-Saclay",
        link: "https://www.universite-paris-saclay.fr/",
        logo: "./img/logo/upsaclay.png",
      },
    ],
    date: {
      start: "2019",
      end: "2022",
    },
    location: "Orsay, France",
    description:
      "Best university program in France for mathematics and physics. Physics courses are shared with ENS Paris-Saclay.",
    tags: ["Mathematics", "Theorical Physics", "Engineering"],
    honors: "Honors",
  },
];
