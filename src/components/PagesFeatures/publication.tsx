import React from "react";

import { Publication } from "../types";
import { letters } from "@site/static/img/letters/letters";

const PublicationCard: React.FC<Publication> = ({
  title,
  description,
  date,
  link,
  authors,
  journal,
  letter,
}) => {
  const letter_wanted = letters.find((l) => l.name === letter);
  return (
    <div className="w-full space-y-2 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600">
      <div className="flex w-full">
        <a
          className="text-xs sm:text-base font-bold hover:underline w-2/3 sm:w-3/4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
      <div className="flex flex-row items-center gap-2 w-full">
        {authors.map((author, index) => (
          <a
            key={index}
            href={author.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline"
          >
            {author.name}
          </a>
        ))}
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 w-3/4">
        {description.en}
      </p>
      {journal && (
        <p className="italic text-xs text-neutral-600 dark:text-neutral-400 w-2/3">
          Journal: {journal}
        </p>
      )}
      <img
        src={letter_wanted.png}
        className="absolute flex -right-4 -bottom-2 h-1/2 -rotate-6 transition group-hover:-translate-x-1 group-hover:translate-y-3 group-hover:-rotate-12"
      />
      <p className="absolute text-xs right-2 top-2">{date}</p>
    </div>
  );
};

export default PublicationCard;
