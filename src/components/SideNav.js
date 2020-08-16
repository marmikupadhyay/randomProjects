import React from "react";
import IconBar from "./IconBar";
import { Link } from "react-router-dom";

function SideNav(props) {
  const radius = "10%";
  const navStyle = {
    background: "#1A0F71",
    width: "7%",
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  };
  const iconStyle = {
    cursor: "pointer"
  };

  return (
    <div className="side-nav h-screen z-30 fixed" style={navStyle}>
      <div
        className="search-icon h-24 flex items-center font-hairline mr-2"
        style={iconStyle}
      >
        <svg
          fill="none"
          viewBox="0 0 20 20"
          stroke="white"
          class="search w-8 h-8 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <Link to="/">
        <IconBar linkindex={props.linkindex} />
        <div
          className="logout-icon h-24 absolute bottom-0 flex items-center font-hairline"
          style={iconStyle}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            class="search w-8 h-8 mx-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default SideNav;
