import React from "react";
import Episode from "./Episode";

function Episodes() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="mt-6 -mb-16">
      <Episode index="1" />
      <Episode index="2" />
      <Episode index="3" />
      <Episode index="4" />
      <Episode index="5" />
      <Episode index="6" />
      <Episode index="7" />
    </div>
  );
}

export default Episodes;
