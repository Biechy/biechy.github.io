import React from "react";
import ThemedImage from "@theme/ThemedImage";

import { Project } from "../types";
import { IconTechno, ScrollHorizontal } from "../Helpers";

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  date,
  technos,
  link,
  repo_link,
  img,
}) => {
  const size_icon = 36;

  return (
    <div className="w-full space-y-4 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600">
      <div>
        <div className="flex items-center justify-between w-full">
          <a
            className="text-lg font-bold hover:underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p className="text-sm">
            {date.start === date.end
              ? `${date.start}`
              : `${date.start} - ${date.end || "Present"}`}
          </p>
        </div>
        <ScrollHorizontal className="sm:w-2/3">
          {technos.map((techno, index) => (
            <IconTechno
              key={index}
              name={techno}
              size={size_icon}
              clickable={false}
            />
          ))}
        </ScrollHorizontal>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 w-full  sm:w-3/5">
        {description.en}
      </p>
      <div className="flex flex-row items-center gap-2 w-1/2">
        <div
          onClick={() =>
            window.open(repo_link, "_blank", "noopener noreferrer")
          }
          className="flex items-center justify-between px-2.5 py-1.5 shadow-sm text-sm text-neutral-800 dark:text-neutral-300 bg-primary-light dark:bg-primary-dark hover:bg-primary-lighter dark:hover:bg-primary-darker rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.86 8.13 6.84 9.44.5.09.68-.22.68-.48v-1.69c-2.8.61-3.39-1.35-3.39-1.35-.46-1.17-1.13-1.48-1.13-1.48-.92-.62.07-.61.07-.61 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.35 1.1 2.91.85.09-.65.35-1.1.64-1.35-2.28-.26-4.68-1.14-4.68-5.08 0-1.12.4-2.04 1.07-2.76-.11-.26-.47-1.31.1-2.73 0 0 .86-.28 2.82 1.06.82-.23 1.69-.34 2.56-.34.87 0 1.74.12 2.56.34 1.96-1.34 2.82-1.06 2.82-1.06.57 1.42.21 2.48.1 2.73.67.72 1.07 1.64 1.07 2.76 0 3.96-2.4 4.82-4.68 5.08.36.31.68.92.68 1.85v2.75c0 .26.18.57.68.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
          <span className="ml-2">Code</span>
        </div>
        <div
          onClick={() => window.open(link, "_blank", "noopener noreferrer")}
          className="flex items-center justify-between px-2.5 py-1.5 shadow-sm text-sm text-neutral-800 dark:text-neutral-300 bg-primary-light dark:bg-primary-dark hover:bg-primary-lighter dark:hover:bg-primary-darker rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-globe-europe-africa"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501" />
          </svg>
          <span className="ml-2 ">Web</span>
        </div>
      </div>
      <ThemedImage
        sources={{
          light: img,
          dark: img.replace(".webp", "-dark.webp"),
        }}
        alt="project page"
        className="max-w-0 sm:max-w-xs absolute -bottom-10 -right-40 xl:-right-20 shadow-xl rounded-t-xl  transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
      />
    </div>
  );
};

export default ProjectCard;
