import React from "react";
import ThemedImage from "@theme/ThemedImage";

import { Education } from "../types";

const EducationCard: React.FC<Education> = ({
  degree,
  school,
  date,
  location,
  description,
  tags,
  honors,
}) => {
  return (
    <div className="w-full space-y-2 relative overflow-hidden group bg-background-color dark:bg-background-color-dark hover:bg-neutral-50 dark:hover:bg-neutral-950 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600">
      <p className="absolute text-sm right-2 top-3">
        {date.start}-{date.end || "Present"}
      </p>
      <p className="absolute text-sm right-2 top-6">{location}</p>
      <div>
        <div className="relative flex items-center justify-between w-3/4 xl:w-full">
          <a
            className="text-md font-bold hover:underline"
            href={degree.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {degree.title}
          </a>
        </div>
        <div className="relative flex flex-wrap flex-row gap-2 sm:gap-5">
          {school.map((school, index) => (
            <div key={index} className="flex items-center space-x-1">
              <ThemedImage
                className="w-12 rounded-sm"
                sources={{
                  light: school.logo,
                  dark: school.logo.replace(".png", "-dark.png"),
                }}
                alt={school.name}
              />
              <a
                className="text-sm font-semibold hover:underline"
                href={school.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {school.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 w-full">
        {description}
      </p>
      <p className="text-xs font-bold text-neutral-600 dark:text-neutral-400 w-full">
        {honors !== "none" && honors}
      </p>
      <div className="flex flex-wrap flex-row items-center gap-2">
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default EducationCard;
