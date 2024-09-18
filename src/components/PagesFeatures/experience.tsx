import React from "react";
import ThemedImage from "@theme/ThemedImage";

import { Experience } from "../types";
import useBaseUrl from "@docusaurus/useBaseUrl";

const ExperienceCard: React.FC<Experience> = ({
  title,
  company,
  date,
  location,
  description,
  results,
  tags,
}) => {
  return (
    <div className="w-full space-y-2 relative overflow-hidden group bg-background-color dark:bg-background-color-dark hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600">
      <p className="absolute text-sm right-2 top-3">
        {date.end
          ? date.end === date.start
            ? `${date.start} (${date.information})`
            : `${date.start} - ${date.end}`
          : `${date.start} - Present`}
      </p>
      <p className="absolute text-sm right-2 top-6">{location}</p>
      <div>
        <div className="relative flex items-center justify-between w-3/4">
          <a className="text-md font-bold">{title}</a>
        </div>
        <div className="relative flex flex-wrap flex-row gap-5">
          <div key={company.name} className="flex items-center space-x-1">
            <ThemedImage
              className="max-w-12 rounded-sm"
              sources={{
                light: useBaseUrl(company.logo),
                dark: useBaseUrl(company.logo.replace(".png", "-dark.png")),
              }}
              alt={company.name}
            />
            <a
              className="text-sm font-semibold hover:underline"
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.name}
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 w-full">
        Mission: {description}
      </p>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 w-full">
        {results && `Results: ${results}`}
      </p>
      <div className="flex flex-row flex-wrap items-center gap-2">
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

export default ExperienceCard;
