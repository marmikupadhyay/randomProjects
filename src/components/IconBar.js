import React, { useState } from "react";
import HomeIcon from "../svgs/homeicon";
import MovieIcon from "../svgs/movie";
import HeartIcon from "../svgs/heart";
import BellIcon from "../svgs/bell";
import AccountIcon from "../svgs/account";
import SettingsIcon from "../svgs/settings";
import { Link } from "react-router-dom";

function IconBar(props) {
  const iconStyle = {
    cursor: "pointer"
  };

  const activeStyle = {
    background: "#1A194B",
    color: "white",
    textAlign: "center"
  };

  const values = ["", "Home", "Movies", "Liked", "Bell", "Profile", "Settings"];

  const index = props.linkindex;
  const text = values[index];

  return (
    <div className="flex flex-col mt-16 h-1/2">
      <Link to="/home">
        <div
          className="home p-4"
          style={index === "1" ? activeStyle : iconStyle}
        >
          <HomeIcon /> {index === "1" ? text : ""}
        </div>
      </Link>
      <div
        className="movie p-4"
        style={index === "2" ? activeStyle : iconStyle}
      >
        <MovieIcon /> {index === "2" ? text : ""}
      </div>
      <Link to="/liked">
        <div
          className="heart p-4"
          style={index === "3" ? activeStyle : iconStyle}
        >
          <HeartIcon />
          {index === "3" ? text : ""}
        </div>
      </Link>
      <div className="bell p-4" style={index === "4" ? activeStyle : iconStyle}>
        <BellIcon />
        {index === "4" ? text : ""}
      </div>
      <Link to="/account">
        <div
          className="account p-4"
          style={index === "5" ? activeStyle : iconStyle}
        >
          <AccountIcon />
          {index === "5" ? text : ""}
        </div>
      </Link>
      <Link to="/settings">
        <div
          className="settings p-4"
          style={index === "6" ? activeStyle : iconStyle}
        >
          <SettingsIcon />
          {index === "6" ? text : ""}
        </div>
      </Link>
    </div>
  );
}

export default IconBar;
