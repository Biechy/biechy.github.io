import React from "react";

import TechnoIcon from "./icontechno";
import { technos } from "@site/src/data/technos";

interface RingProps {
  size: number;
  category: "AI" | "software";
  message: "Expert" | "Advanced" | "Intermediate";
  degrees: number;
  random: number;
  sizeIcon: number;
}

const Ring: React.FC<RingProps> = ({
  size,
  message,
  category,
  degrees,
  random,
  sizeIcon,
}) => {
  const possible = [
    "animate-spin-expert",
    "animate-spin-advanced",
    "animate-spin-intermediate",
    "animate-spin-expert-reverse",
    "animate-spin-advanced-reverse",
    "animate-spin-intermediate-reverse",
    "group-hover:animate-spin-expert-pause",
    "group-hover:animate-spin-advanced-pause",
    "group-hover:animate-spin-intermediate-pause",
    "group-hover:animate-spin-expert-reverse-pause",
    "group-hover:animate-spin-advanced-reverse-pause",
    "group-hover:animate-spin-intermediate-reverse-pause",
  ];
  const level = message.toLowerCase();
  const random1 = random;
  const random2 = random1 ^ 1;
  const spin = [`animate-spin-${level}`, `animate-spin-${level}-reverse`];
  const spinPause = [
    `group-hover:animate-spin-${level}-pause`,
    `group-hover:animate-spin-${level}-reverse-pause`,
  ];
  const radius = size / 2;
  const technosFilter = technos.filter((t) => t.level === level);
  const icons = Array.from({ length: technosFilter.length }, (_, i) => {
    const angle = (i / technosFilter.length) * 2 * Math.PI;
    return {
      x: radius + radius * Math.cos(angle),
      y: radius + radius * Math.sin(angle),
    };
  });

  return (
    <div className="absolute flex flex-wrap justify-center align-center">
      <svg
        width={size}
        height={size}
        className="absolute"
        style={{ transform: `rotate(-${degrees}deg)` }}
      >
        <defs>
          <path
            id={`circlePath-${message}`}
            d={`M ${radius},${radius} m -${radius - sizeIcon / 2},0 a ${
              radius - sizeIcon / 2
            },${radius - sizeIcon / 2} 0 1,1 ${
              2 * (radius - sizeIcon / 2)
            },0 a ${radius - sizeIcon / 2},${radius - sizeIcon / 2} 0 1,1 -${
              2 * (radius - sizeIcon / 2)
            },0`}
          />
        </defs>
        <text
          fontSize="20"
          className="text-sm fill-stone-300 dark:fill-stone-600"
        >
          <textPath
            href={`#circlePath-${message}`}
            startOffset="50%"
            textAnchor="middle"
          >
            {message}
          </textPath>
        </text>
      </svg>
      <div
        className={`relative rounded-full border-solid border-1 border-stone-200 dark:border-stone-600 ${spin[random1]} ${spinPause[random1]}`}
        style={{ width: size, height: size }}
      >
        {icons.map((icon, i) => (
          <div
            key={i}
            className={`absolute ${spin[random2]} ${spinPause[random2]}`}
            style={{ left: icon.x - sizeIcon / 2, top: icon.y - sizeIcon / 2 }}
          >
            <TechnoIcon
              name={technosFilter[i].name}
              size={
                category === technosFilter[i].category || category === "all"
                  ? sizeIcon
                  : 0
              }
              clickable={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ring;
