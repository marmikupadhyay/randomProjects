import React from "react";
import Background from "../imgs/BG.png";
import Logo from "./Logo";
import LeftLoginSide from "./LeftLoginSide";
import RightLoginSide from "./RightLoginSide";

function LoginPage() {
  const wrapperStyle = {
    background: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const bodyStyle = {
    background: " rgba(18, 17, 54,0.8)"
  };

  return (
    <div className="h-screen w-screen wrapper" style={wrapperStyle}>
      <div className="h-screen w-screen body " style={bodyStyle}>
        <Logo />
        <div className="flex h-1/2">
          <LeftLoginSide />
          <RightLoginSide />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
