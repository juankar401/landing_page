import React from 'react';

const Home = () => {
  const svgPaths = {
    leftGrass: '/assets/decoration/manGrass2.svg',
    rightGrass: '/assets/decoration/manGrass.svg',
    clouds: '/assets/decoration/cloud.svg',
    button: '/assets/buttons/startAdventure.svg',
    targetsGroup: '/assets/targets/home.svg',
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Nubes del fondo */}
      <div className="absolute inset-0">
        <img 
          src={svgPaths.clouds} 
          alt="Cloud" 
          className="absolute top-8 left-12"
        />
        <img 
          src={svgPaths.clouds} 
          alt="Cloud" 
          className="absolute top-8 right-12"
        />
        <img 
          src={svgPaths.clouds} 
          alt="Cloud" 
          className="absolute top-16 left-1/3 opacity-80"
        />
      </div>

      {/* Título principal */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-30">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
          Learn about<br />
          finance like it's a<br />
          video game
        </h1>
        <p className="text-white text-lg md:text-xl mt-6 max-w-md mx-auto">
          With FinanQuest, kids and teens between 10 and 18 
          will learn to save, invest, and understand the value 
          of money in a fun and practical way.
        </p>
      </div>

      {/* Botón Start your adventure */}
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <img 
          src={svgPaths.button} 
          alt="Start your adventure button" 
          className="cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* Targets de información - Bajadas */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <img 
          src={svgPaths.targetsGroup} 
          alt="Information targets" 
          className="cursor-pointer hover:scale-105 transition-transform scale-125"
        />
      </div>

      {/* Césped izquierdo */}
      <img 
        src={svgPaths.leftGrass} 
        alt="Left grass" 
        className="absolute bottom-20 left-0 z-20"
      />

      {/* Personaje con césped derecho */}
      <img 
        src={svgPaths.rightGrass} 
        alt="Character with right grass" 
        className="absolute bottom-20 right-0 z-20"
      />
    </div>
  );
};

export default Home;