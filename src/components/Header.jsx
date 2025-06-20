import { useState } from "react";

function Header() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-between px-4 md:px-8 lg:px-12 items-center pt-4 md:pt-8">
      <p className="font-1 text-4xl md:text-5xl lg:text-7xl">FinanQuest</p>
      <div className="flex gap-4 md:gap-8 items-center">
        <p className="font-1 text-3xl md:text-4xl lg:text-6xl">Features</p>
        <img
          src={hovered ? "./assets/buttons/joinBtn2.svg" : "./assets/buttons/joinBtn.svg"}
          alt="Join"
          className="w-32 md:w-40 lg:w-54 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default Header;