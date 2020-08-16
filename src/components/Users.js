import React from "react";
import Adam from "../imgs/Adam.png";
import Jonas from "../imgs/Jonas.png";
import Martha from "../imgs/Martha.png";
import Hannah from "../imgs/Hannah.png";

function Users() {
  const imageStyle = {
    height: "65%",
    cursor: "pointer"
  };

  const activeStyle = {
    filter: "drop-shadow(0px 0px 10px white)"
  };

  return (
    <div className="flex justify-evenly w-1/2 mt-6 mx-auto">
      <div className="h-24 text-center text-white text-xl" style={activeStyle}>
        <img src={Jonas} className="mb-1" style={imageStyle} alt="" />
        Jonas
      </div>
      <div className="h-24">
        <img src={Martha} className="" style={imageStyle} alt="" />
      </div>
      <div className="h-24">
        <img src={Hannah} className="" style={imageStyle} alt="" />
      </div>
      <div className="h-24">
        <img src={Adam} className="" style={imageStyle} alt="" />
      </div>
    </div>
  );
}

export default Users;
