import React from "react";

import ExperienceCard from "./experience";
import { Experience } from "../types";

const ExperiencesList: React.FC<Experience[]> = ({ experiences }) => {
  return (
    <div className="relative flex flex-wrap gap-4">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-[10%] w-2 h-full bg-stone-300 dark:bg-stone-600 shadow-lg"></div>
      </div>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          company={experience.company}
          date={experience.date}
          location={experience.location}
          description={experience.description}
          results={experience.results}
          tags={experience.tags}
        />
      ))}
    </div>
  );
};

export default ExperiencesList;
