import React from "react";
import Vampire from "../imgs/vampirediaries.png";
import Breaking from "../imgs/breakingbad.png";
import Stranger from "../imgs/strangerthings.png";
import Dark from "../imgs/dark.png";
import ActionBar from "./ActionBar";

function MovieCards(props) {
  const containerStyle = {
    fontFamily: "Exo",
    letterSpacing: "0.5px"
  };

  const cardStyle = {
    background: "linear-gradient(0deg, #3E2AD1 0%, rgba(62, 42, 209, 0) 100%)",
    position: "relative",
    filter: "drop-shadow(0px 0px 1px #000000)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  };

  return (
    <div
      className="w-10/12 mx-auto mt-8 mb-4 text-white"
      style={containerStyle}
    >
      <span
        className="text-2xl font-semibold mb-6"
        style={{ filter: "drop-shadow(0px 0px 8px #000000)" }}
      >
        {props.title}
      </span>
      <div className="card-container mt-6 flex flex-row justify-between">
        <div className="cards w-2/12 flex flex-col text-center">
          <div className="" style={cardStyle}>
            <img
              src={Vampire}
              style={{ opacity: "0.6" }}
              alt="The Vampire Diaries"
            />
            <ActionBar />
          </div>
          <span className="pt-4 font-semibold text-lg">
            The Vampire Diaries
          </span>
        </div>
        <div className="cards w-2/12 flex flex-col text-center ">
          <div className="" style={cardStyle}>
            <img src={Breaking} style={{ opacity: "0.6" }} alt="Breaking Bad" />
            <ActionBar />
          </div>

          <span className="pt-4 font-semibold text-lg">Breaking Bad</span>
        </div>
        <div className="cards w-2/12 flex flex-col text-center">
          <div className="" style={cardStyle}>
            <img
              src={Stranger}
              style={{ opacity: "0.6" }}
              alt="Stranger Things"
            />
            <ActionBar />
          </div>
          <span className="pt-4 font-semibold text-lg">Stranger Things</span>
        </div>
        <div className="cards w-2/12 flex flex-col text-center">
          <div className="" style={cardStyle}>
            <img src={Dark} style={{ opacity: "0.6" }} alt="Dark" />
            <ActionBar />
          </div>
          <span className="pt-4 font-semibold text-lg">Dark</span>
        </div>
        <div className="cards w-2/12 flex flex-col text-center">
          <div className="" style={cardStyle}>
            <img
              src={Vampire}
              style={{ opacity: "0.6" }}
              alt="The Vampire Diaries"
            />
            <ActionBar />
          </div>
          <span className="pt-4 font-semibold text-lg">
            The Vampire Diaries
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCards;
