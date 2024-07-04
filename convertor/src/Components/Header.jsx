import React from "react";
import Logo2 from "../assets/Logo2.png";

const Header = () => {
  return (
    <header className="w-full h-12  flex justify-center items-center px-16 py-6">
      <img src={Logo2} alt="Logo" className="w-32" />
    </header>
  );
};

export default Header;
