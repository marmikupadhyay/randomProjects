import React from "react";
import JokerBack from "../imgs/JokerBack.png";
import PlayIcon from "../svgs/play";

function ContinueWatching() {
  const divStyle = {
    background: `url(${JokerBack})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundPosition: "top",
    borderRadius: "4vh",
    overflowY: "auto",
    fontFamily: "Exo",
    filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0 , 0.7))"
  };

  const btnStyle = {
    background: "#CA1044"
  };

  return (
    <div style={divStyle} className="w-10/12 mx-auto ">
      <div className="content w-2/5 text-white my-10 flex flex-col  ml-10">
        <span className="text-4xl font-semibold">Continue Watching</span>
        <div className="details ml-4 mt-8">
          <span className="text-4xl font-semibold">Joker</span>
          <br />
          <span style={{ fontFamily: "arial", color: "darkgrey" }}>
            <span className="mr-2">2019</span>|
            <span className="mx-2">Crime/Drama</span>|
            <span className="mx-2">2h 2min</span>
          </span>
          <div className="pt-1 mt-4 w-3/5 progress-bar">
            <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-white">
              <div
                style={{ width: "50%", background: "#CA1044" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
              ></div>
            </div>
          </div>
          <div className="btn-box mt-12 mb-4">
            <button
              style={btnStyle}
              className="py-1 px-3 text-xl uppercase rounded flex items-center"
            >
              Resume
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContinueWatching;
