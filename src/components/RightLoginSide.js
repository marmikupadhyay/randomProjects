import React from "react";
import { Link } from "react-router-dom";

function RightLoginSide() {
  const divStyle = {
    borderLeft: "2px solid white",
    minHeight: "50vh"
  };

  const containerStyle = {
    border: "3px solid #3B399D",
    borderRadius: "3%",
    filter: "drop-shadow(0px 0px 10px #3B399D)"
  };

  const gradient = "linear-gradient(268.14deg, #D81F26 -2.26%, #C50B4E 98.04%)";

  const joinStyle = {
    background: gradient,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%)",
    borderRadius: "4%",
    cursor: "pointer"
  };

  const btnStyle = {
    background: gradient,
    textShadow: "0px 0px 2px #fff",
    filter: "drop-shadow(0px 0px 2px #3B399D)"
  };

  return (
    <div className="w-1/2 flex" style={divStyle}>
      <div className="form-container mx-auto w-5/12" style={containerStyle}>
        <div className="head flex text-white text-xl font-medium text-center">
          <span className="w-1/2 py-3">SIGN IN</span>
          <span className="w-1/2 h-full py-3" style={joinStyle}>
            <span> JOIN FREE</span>
          </span>
        </div>
        <form action="">
          <div className="flex flex-col w-100">
            <input
              type="text"
              className="w-4/5 h-12 my-2 mt-8 mx-auto rounded p-4 text-white bg-transparent"
              placeholder="E-mail"
              style={{ border: "3px solid #3B399D" }}
              name="mail"
            />
            <input
              type="password"
              className="w-4/5 h-12 my-2 mx-auto rounded p-4 text-white bg-transparent"
              style={{ border: "3px solid #3B399D" }}
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="btn-box flex w-100 text-xl text-white">
            <Link
              to="/home"
              className="text-center my-5 w-4/5 mx-auto"
              style={{ display: "block", padding: 0 }}
            >
              <button
                style={btnStyle}
                className="mx-auto py-2 rounded-lg uppercase w-full"
              >
                Sign In
              </button>
            </Link>
          </div>
          <p
            className="text-center w-full mb-6"
            style={{ color: "rgba(255, 255, 255, 0.32)", cursor: "pointer" }}
          >
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
}

export default RightLoginSide;
