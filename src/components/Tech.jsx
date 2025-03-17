import React, { useState, useEffect } from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [tooltipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center relative"
          onMouseEnter={() => handleMouseEnter(index, technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          {isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}

          {tooltipTexts[index] && (
            <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {tooltipTexts[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
