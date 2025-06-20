import React from 'react';

const Cat = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0 ">
      <div className="font-1 text-6xl absolute top-12 left-1/2 transform -translate-x-1/2 text-white font-bold text-center leading-tight">
        Insert
        <img 
          src="/assets/decoration/coin.svg" 
          alt="coin" 
          className="inline-block align-middle mx-2 mb-6 w-12 h-12"
        />
        to Begin Your
        <br />
        Financial Adventure
      </div>

      {/* Tesoro - esquina inferior izquierda */}
      <div className="absolute bottom-50 left-0">
        <img 
          src="/assets/decoration/cofre.svg" 
          alt="treasure chest"
        />
      </div>

      {/* Gato - esquina inferior derecha, 60px más abajo */}
      <div className="absolute bottom-[-60px] right-0">
        <img 
          src="/assets/decoration/cat.svg" 
          alt="cat character"
        />
      </div>

      {/* Botón - centrado abajo */}
      <div className="absolute bottom-78 left-1/2 transform -translate-x-1/2">
        <img 
          src="/assets/buttons/startAdventure.svg" 
          alt="start your adventure button" 
          className="cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>
    </div>
  );
};

export default Cat;
