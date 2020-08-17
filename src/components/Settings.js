import React from "react";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";
import BackGroundVector from "./BackGroundVector";
import Membership from "../imgs/membership.png";
import Parental from "../imgs/parental.png";
import Language from "../imgs/language.png";
import Manage from "../imgs/manage.png";

function Settings() {
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
      <SideNav linkindex="6" />
      <BackGroundVector />
      <div
        className="z-20 mt-40 mb-12 mx-auto  wow animate__animated animate__fadeIn"
        style={mainStyle}
      >
        <div className="details w-8/12 mx-auto flex flex-col ">
          <h1 className="text-white text-5xl w-8/12 mx-auto font-semibold text-center border-b-2 pb-3">
            Account Settings
          </h1>
          <div className="flex flex-row justify-between">
            <div className="item cursor-pointer">
              <img
                src={Membership}
                alt=""
                className="w-3/5 mx-auto my-8 mt-16"
              />
              <span className="text-white text-2xl text-center block w-3/5 mx-auto font-semibold">
                Membership Details
              </span>
            </div>
            <div className="item cursor-pointer">
              <img src={Parental} alt="" className="w-3/5 mx-auto my-8 mt-16" />
              <span className="text-white text-2xl text-center block w-3/5 mx-auto font-semibold">
                Parental Controls
              </span>
            </div>
            <div className="item cursor-pointer">
              <img src={Language} alt="" className="w-3/5 mx-auto my-8 mt-16" />
              <span className="text-white text-2xl text-center block w-3/5 mx-auto font-semibold">
                Language Settings
              </span>
            </div>
            <div className="item cursor-pointer">
              <img src={Manage} alt="" className="w-3/5 mx-auto my-8 mt-16" />
              <span className="text-white text-2xl text-center block w-3/5 mx-auto font-semibold">
                Manage Devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
