import React from "react";
import Users from "./Users";
import Logo from "../imgs/Logo.png";

function HeaderNav() {
  const headerStyle = {
    position: "fixed",
    top: "0",
    background: "inherit"
  };

  const logoStyle = {};

  return (
    <div className="w-screen h-32 z-30" style={headerStyle}>
      <div className="logo-container h-full absolute right-0 p-2">
        <img src={Logo} alt="logo" className="h-full" style={logoStyle} />
      </div>
      <Users />
    </div>
  );
}

export default HeaderNav;
