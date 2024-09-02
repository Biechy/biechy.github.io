import React, { useState } from "react";

import { Techno } from "../types";
import { technos } from "@site/src/data";

import { IconTechno, Ring, ButtonGroup, ScrollHorizontal } from "../Helpers";

const randomNumbers = [
  Math.round(Math.random()),
  Math.round(Math.random()),
  Math.round(Math.random()),
];

const Stack: React.FC<Techno[]> = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "AI" | "software"
  >("all");
  const ringSizes = [400, 300, 200];
  const sizeIcon = 36;

  return (
    <>
      <div className="hidden sm:flex group h-[425px] items-center justify-center">
        <Ring
          key="intermediate"
          size={ringSizes[0]}
          category={activeCategory}
          message="Intermediate"
          degrees={45}
          random={randomNumbers[0]}
          sizeIcon={sizeIcon}
        />
        <Ring
          key="advanced"
          size={ringSizes[1]}
          category={activeCategory}
          message="Advanced"
          degrees={130}
          random={randomNumbers[1]}
          sizeIcon={sizeIcon}
        />
        <Ring
          key="expert"
          size={ringSizes[2]}
          category={activeCategory}
          message="Expert"
          degrees={70}
          random={randomNumbers[2]}
          sizeIcon={sizeIcon}
        />
        <img
          src="./img/memojie/computer.png"
          className="absolute w-24 aspect-square rounded-full cursor-pointer mb-10"
          title="Me ! :)"
        />
        <div className="relative inline-flex">
          <ButtonGroup
            activeButton={activeCategory}
            onButtonChange={setActiveCategory}
          />
        </div>
      </div>
      <div className="flex flex-col sm:hidden gap-10">
        <div>
          <h2>AI</h2>
          <ScrollHorizontal className="flex">
            {technos.map(
              (techno, index) =>
                techno.category === "AI" && (
                  <IconTechno
                    key={index}
                    name={techno.name}
                    size={sizeIcon}
                    clickable={true}
                  />
                )
            )}
          </ScrollHorizontal>
        </div>
        <div>
          <h2>Software</h2>
          <ScrollHorizontal className="flex">
            {technos.map(
              (techno, index) =>
                techno.category === "software" && (
                  <IconTechno
                    key={index}
                    name={techno.name}
                    size={sizeIcon}
                    clickable={true}
                  />
                )
            )}
          </ScrollHorizontal>
        </div>
      </div>
    </>
  );
};

export default Stack;
