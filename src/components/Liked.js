import React from "react";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";
import BackGroundVector from "./BackGroundVector";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Seasons from "./Seasons";

function Liked() {
  const bodyStyle = {
    background: "rgba(18, 17, 54)"
  };

  const mainStyle = {
    width: "93%",
    marginLeft: "7%",
    minHeight: "calc(100vh - 12rem)"
  };

  return (
    <div style={bodyStyle} className="flex">
      <HeaderNav />
      <SideNav linkindex="3" />
      <BackGroundVector />
      <div
        className="z-20 mt-40 mb-12 mx-auto  wow animate__animated animate__fadeIn"
        style={mainStyle}
      >
        <Banner />
        <Seasons />
      </div>
    </div>
  );
}

export default Liked;
