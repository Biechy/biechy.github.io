import React from "react";

import PublicationCard from "./publication";
import { Publication } from "../types";

const PublicationsList: React.FC<Publication[]> = ({ publications }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {publications.map((publication, index) => (
          <PublicationCard
            key={index}
            title={publication.title}
            description={publication.description}
            date={publication.date}
            link={publication.link}
            authors={publication.authors}
            journal={publication.journal}
            letter={publication.letter}
          />
        ))}
      </div>
      <a
        className="text-sm hover:underline cursor-pointer block text-right mr-10"
        href="/publications"
      >
        All Publications
      </a>
    </>
  );
};

export default PublicationsList;
