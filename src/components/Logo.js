import React from "react";
import Logoimg from "../imgs/Logo.png";

function Logo() {
  const logoStyle = {
    height: "33vh"
  };
  return (
    <div className="w-full text-center flex items-center" style={logoStyle}>
      <img src={Logoimg} alt="Logo" className="w-1/4 mx-auto mt-8 mb-4" />
    </div>
  );
}

export default Logo;
