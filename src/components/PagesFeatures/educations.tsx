import React from "react";

import EducationCard from "./education";
import { Education } from "../types";

const EducationsList: React.FC<Education[]> = ({ educations }) => {
  return (
    <div className="relative flex flex-wrap gap-4">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[10%] w-2 h-full bg-stone-300 dark:bg-stone-600 shadow-lg"></div>
      </div>
      {educations.map((education, index) => (
        <EducationCard
          key={index}
          degree={education.degree}
          school={education.school}
          date={education.date}
          location={education.location}
          description={education.description}
          tags={education.tags}
          honors={education.honors}
        />
      ))}
    </div>
  );
};

export default EducationsList;
