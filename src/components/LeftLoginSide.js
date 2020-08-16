import React from "react";

function LeftLoginSide() {
  const divStyle = {
    borderRight: "2px solid white",
    minHeight: "50vh",
    lineHeight: "6vh"
  };

  const textStyle = {
    fontSize: "1.5em",
    color: "white",
    textAlign: "center"
  };

  return (
    <div className="w-1/2  flex flex-col" style={divStyle}>
      <div style={textStyle} className="w-3/5mx-auto pt-20">
        <span style={{ fontSize: "1.7em", fontWeight: "bold" }}>
          <span>Unlimited movies,</span> <br />
          <span>TV shows and more.</span>
        </span>
        <br />
        <span> Watch anywhere. Cancel anytime.</span>
      </div>
    </div>
  );
}

export default LeftLoginSide;
