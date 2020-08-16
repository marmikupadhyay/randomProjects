import React from "react";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";
import ContinueWatching from "./ContinueWatching";
import MovieCards from "./MovieCards";
import BackGroundVector from "./BackGroundVector";

function Home() {
  const bodyStyle = {
    background: "rgba(18, 17, 54)"
  };

  const mainStyle = {
    width: "93%",
    marginLeft: "7%"
  };
  return (
    <div style={bodyStyle} className="flex home">
      <HeaderNav />
      <SideNav linkindex="1" />
      <BackGroundVector />
      <div className="main-body mt-40 mb-12 z-20" style={mainStyle}>
        <ContinueWatching />
        <MovieCards title="Popular on Netflix" />
        <MovieCards title="Recommended for You" />
      </div>
    </div>
  );
}

export default Home;
