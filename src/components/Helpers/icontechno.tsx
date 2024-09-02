import React from "react";

import { technos } from "@site/src/data/technos";

interface IconTechnoProps {
  name: string;
  size: number;
  clickable: boolean;
}

const IconTechno: React.FC<IconTechnoProps> = ({ name, size, clickable }) => {
  const techno = technos.find((t) => t.name === name);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: techno.svg }}
      style={{
        width: size + "px",
        height: size + "px",
      }}
      className="flex cursor-pointer place-items-center "
      title={name}
      onClick={() =>
        clickable && window.open(techno.link, "_blank", "noopener noreferrer")
      }
    />
  );
};

export default IconTechno;
