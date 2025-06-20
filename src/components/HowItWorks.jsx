import { useState } from "react";

function HowItWorks() {
  const [hovered, setHovered] = useState({
    h1: false,
    h2: false,
    h3: false,
  });

  return (
    <div className="flex flex-col items-center pt-4 md:pt-8 mb-32">
      <h1 className="font-1 text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-8 text-center">
        How It Works
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-24 pb-12 md:pb-24 px-4">
        <img
          src={
            hovered.h1
              ? "/assets/targets/h1Hover.svg"
              : "/assets/targets/h1.svg"
          }
          alt="h1"
          draggable={false}
          className="cursor-pointer w-full max-w-[408px] h-auto transition-all duration-200"
          onMouseEnter={() => setHovered({ ...hovered, h1: true })}
          onMouseLeave={() => setHovered({ ...hovered, h1: false })}
        />
        <img
          src={
            hovered.h2
              ? "/assets/targets/h2Hover.svg"
              : "/assets/targets/h2.svg"
          }
          alt="h2"
          draggable={false}
          className="cursor-pointer w-full max-w-[408px] h-auto transition-all duration-200"
          onMouseEnter={() => setHovered({ ...hovered, h2: true })}
          onMouseLeave={() => setHovered({ ...hovered, h2: false })}
        />
        <img
          src={
            hovered.h3
              ? "/assets/targets/h3Hover.svg"
              : "/assets/targets/h3.svg"
          }
          alt="h3"
          draggable={false}
          className="cursor-pointer w-full max-w-[408px] h-auto md:col-span-2 lg:col-span-1 mx-auto transition-all duration-200"
          onMouseEnter={() => setHovered({ ...hovered, h3: true })}
          onMouseLeave={() => setHovered({ ...hovered, h3: false })}
        />
      </div>
      <img
        src={"/assets/decoration/grass.png"}
        alt="Grass decoration"
        className="w-full"
      />
    </div>
  );
}

export default HowItWorks;