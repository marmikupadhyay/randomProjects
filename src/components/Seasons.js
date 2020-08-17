import React from "react";
import Episodes from "./Episodes";

function Seasons() {
  return (
    <div className="flex w-10/12 flex-col pb-6 mt-2 mx-auto text-white">
      <div
        className="season-bar flex text-lg font-semibold"
        style={{ fontFamily: "Exo", letterSpacing: "1px" }}
      >
        <span className="mx-8 pt-4 pb-1 cursor-pointer border-b-2">
          Season 1
        </span>
        <span className="mx-8 pt-4 pb-1 cursor-pointer hover:border-b-2">
          Season 2
        </span>
        <span className="mx-8 pt-4 pb-1 cursor-pointer hover:border-b-2">
          Season 3
        </span>
        <span className="mx-8 pt-4 pb-1 cursor-pointer hover:border-b-2">
          Season 4
        </span>
        <span className="mx-8 pt-4 pb-1 cursor-pointer hover:border-b-2">
          Season 5
        </span>
      </div>
      <Episodes />
    </div>
  );
}

export default Seasons;
