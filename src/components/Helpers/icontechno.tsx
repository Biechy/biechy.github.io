import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { technos } from "@site/static/img/technos/technos";

interface IconTechnoProps {
  name: string;
  size: number;
  clickable: boolean;
}

const IconTechno: React.FC<IconTechnoProps> = ({ name, size, clickable }) => {
  const techno = technos.find((t) => t.name === name);
  return (
    <div
      className="flex cursor-pointer place-items-center "
      title={name}
      onClick={() =>
        clickable && window.open(techno.link, "_blank", "noopener noreferrer")
      }
    >
      <img
        src={useBaseUrl(techno.png)}
        alt={name}
        style={{ maxHeight: size, maxWidth: size }}
        className="object-contain"
      />
    </div>
  );
};

export default IconTechno;
