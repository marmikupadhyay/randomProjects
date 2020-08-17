import React from "react";
import likedcover from "../imgs/likedcover.png";

function Banner() {
  const bannerStyle = {};
  return (
    <div
      style={bannerStyle}
      className="flex w-10/12 flex-row items-center pb-6 mt-2 mx-auto text-white border-b-2"
    >
      <div
        className="w-4/12"
        style={{ lineHeight: "3.5vh", letterSpacing: "1px" }}
      >
        <span className="text-4xl font-semibold">Breaking Bad</span>
        <div className="my-8 text-xl">
          <span
            className="font-semibold"
            style={{ fontFamily: "Exo", color: "gray" }}
          >
            Release Date
          </span>
          <br />
          <span>20 January 2008</span>
        </div>
        <div className="my-8 text-xl">
          <span
            className="font-semibold"
            style={{ fontFamily: "Exo", color: "gray" }}
          >
            Cast
          </span>
          <br />
          <span>Bryon Craston</span>
          <br />
          <span>Aaron Paul</span>
          <br />
          <span>Anna Gunn</span>
          <br />
        </div>
        <div className="my-8 text-xl">
          <span
            className="font-semibold"
            style={{ fontFamily: "Exo", color: "gray" }}
          >
            Genres
          </span>
          <br />
          <span>Crime TV Dramas</span>
          <br />
          <span>TV Thrillers</span>
          <br />
          <span>US TV Shows</span>
          <br />
        </div>
      </div>
      <div
        className="w-8/12 banner relative"
        style={{ filter: "drop-shadow(0px 0px 4px #121136)" }}
      >
        <img src={likedcover} alt="Breaking Bad Cover" className="w-100" />
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Banner;
