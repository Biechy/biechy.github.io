import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { News } from "../types";

const NewsList: React.FC<News[]> = ({ news }) => {
  const [nb, setNb] = useState(5);
  return (
    <div className="-space-y-2">
      {news.slice(0, nb).map((news, index) => (
        <div key={index} className="flex gap-4 items-center">
          <p className="text-sm min-w-14">{news.date}</p>
          <p className="min-w-5">{news.emoji}</p>
          <ReactMarkdown className="text-sm">{news.description}</ReactMarkdown>
        </div>
      ))}
      <a
        className="text-sm hover:underline cursor-pointer block text-right mr-10"
        onClick={() => (nb === -1 ? setNb(5) : setNb(-1))}
      >
        {nb === -1 ? "Show less" : "Show all"}
      </a>
    </div>
  );
};

export default NewsList;
