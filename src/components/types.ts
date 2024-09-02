export interface Project {
  name: string;
  description: {
    en: string;
    fr?: string;
  };
  tag: string[];
  date: {
    start: number;
    end?: number;
  };
  technos: (
    | "React"
    | "TailwindCSS"
    | "TypeScript"
    | "Python"
    | "R"
    | "PostgreSQL"
    | "MongoDB"
    | "Prisma"
    | "NextJS"
    | "PyTorch"
    | "Scikit-learn"
  )[];
  link: string;
  repo_link: string;
  img: string;
}

export interface Techno {
  name:
    | "React"
    | "TailwindCSS"
    | "TypeScript"
    | "Python"
    | "R"
    | "PostgreSQL"
    | "MongoDB"
    | "Prisma"
    | "NextJS"
    | "PyTorch"
    | "Scikit-learn";
  link: string;
  category: "AI" | "software";
  level: "expert" | "advanced" | "intermediate" | "none";
  svg: string;
}

export interface Publication {
  title: string;
  description: {
    en: string;
    fr?: string;
  };
  date: string;
  link: string;
  authors: {
    name: string;
    permalink: string;
  }[];
  tags: string[];
  letter: "lambda" | "epsilon" | "gamma" | "beta" | "alpha" | "pi";
  journal?: string;
}

export interface News {
  description: string;
  category: "scholar" | "publications" | "projects" | "career" | "personal";
  emoji: string;
  date: string;
}

export interface Education {
  degree: {
    title: string;
    link: string;
  };
  school: {
    name: string;
    link: string;
    logo: string;
  }[];
  date: {
    start: string;
    end: string;
    information?: string;
  };
  location: string;
  description?: string;
  tags?: string[];
  honors: "Very High Honors" | "High Honors" | "Honors" | "none";
}

export interface Experience {
  title: string;
  company: {
    name: string;
    link: string;
    logo: string;
  };
  date: {
    start: string;
    end?: string;
    information?: string;
  };
  location: string;
  description: string;
  results?: string;
  tags: string[];
}
