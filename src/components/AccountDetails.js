import React from "react";
import SideNav from "./SideNav";
import HeaderNav from "./HeaderNav";
import BackGroundVector from "./BackGroundVector";
import { Link } from "react-router-dom";

function AccountDetails() {
  const bodyStyle = {
    background: "rgba(18, 17, 54)"
  };

  const mainStyle = {
    width: "93%",
    marginLeft: "7%",
    minHeight: "calc(100vh - 12rem)"
  };

  const btnStyle = {
    background: "linear-gradient(270deg, #D71E2A 20.37%, #C70D4B 77.96%)"
  };

  return (
    <div style={bodyStyle} className="flex">
      <HeaderNav />
      <SideNav linkindex="5" />
      <BackGroundVector />
      <div
        className="z-20 mt-40 mb-12 mx-auto  wow animate__animated animate__fadeIn"
        style={mainStyle}
      >
        <div className="details w-8/12 mx-auto flex flex-col ">
          <h1 className="text-white text-5xl  font-semibold text-center  pb-2">
            Account Details
          </h1>
          <div className="info border-b-2 border-t-2">
            <div className="my-6 text-white text-2xl ml-6">
              <span>Email</span>
              <br />
              <span className="font-bold">jonaskhanwald@gmail.com</span>
            </div>
            <div className="my-6 text-white text-2xl ml-6">
              <span>Subscription Status</span>
              <br />
              <span className="font-bold">Premium @ 799</span>
            </div>
            <div className="my-6 text-white text-2xl ml-6">
              <span>Subscription Valid Till</span>
              <br />
              <span className="font-bold">10th September 2020</span>
            </div>
          </div>
          <div className="btn-box mx-auto my-4">
            <Link to="/">
              <button
                style={btnStyle}
                className="uppercase px-16 py-2 text-3xl text-white rounded "
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
