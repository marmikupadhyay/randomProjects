import React from "react";
import Ep1Image from "../imgs/ep1.png";
import Ep2Image from "../imgs/ep2.png";
import Ep3Image from "../imgs/ep3.png";
import Ep4Image from "../imgs/ep4.png";
import Ep5Image from "../imgs/ep5.png";
import Ep6Image from "../imgs/ep6.png";
import Ep7Image from "../imgs/ep7.png";

function Episode(props) {
  const EpImage = [
    Ep1Image,
    Ep2Image,
    Ep3Image,
    Ep4Image,
    Ep5Image,
    Ep6Image,
    Ep7Image
  ];

  const info = [
    "Diagnosed with terminal lung cancer, a high school chemistry teacher resorts to cooking and selling methamphetamine to provide for his family.",
    "Their first aborted drug deal forces Walt and Jesse to dispose of a pair of corpses. Meanwhile, Skyler suspects that her husband is up to no good.",
    "As Walt cleans up the mess that was left after his first drug deal, Skyler gets too close to the truth about his double life.",
    "Being forced to reveal the truth about his illness leaves Walt facing the dilemma of how to pay for an expensive series of cancer treatments.",
    "Skyler organizes an intervention to persuade Walt to accept his former research partner's generous offer to pay for the cancer treatments.",
    "With the side effects and cost of his treatment mounting, Walt demands that Jesse find a wholesaler to buy their drugs -- which lands him in trouble.",
    "After Jesse's brush with death, Walt agrees to produce even more drugs for the ruthless Tuco. Meanwhile, Skyler suspects her sister of shoplifting."
  ];

  const time = [58, 48, 48, 48, 48, 48, 48];
  const names = [
    "Pilot",
    "The Cat's in the Bag",
    "And the Bag's in the River",
    "Cancer Man",
    "Gray Matter",
    "Crazy Handful of Nothing",
    "A No-Rough-Stuff-Type Deal"
  ];

  return (
    <div
      className="episode flex my-6 pb-6 items-center border-b-2"
      style={
        props.index === "7"
          ? { borderBottom: "0px solid white", paddingBottom: "0" }
          : {}
      }
    >
      <div
        className="img-box w-1/5 relative"
        style={{
          borderRadius: "1rem"
        }}
      >
        <img
          src={EpImage[props.index - 1]}
          alt="Ep1"
          className="w-100"
          style={{ borderRadius: "1rem" }}
        />
        <div className="overlay-2"></div>
      </div>
      <div className="w-3/5 pl-8 -mt-6 text-white">
        <span
          className="title font-semibold text-xl cursor-pointer"
          style={{ fontFamily: "Exo", letterSpacing: "1px" }}
        >
          Episode {props.index}. {names[props.index - 1]}
        </span>
        <span
          style={{ color: "grey", float: "right" }}
          className="inline-block mt-2 mr-12"
        >
          {time[props.index - 1]}min
        </span>
        <br />
        <span
          className="info -ml-2 mt-2 inline-block"
          style={{ color: "grey", fontFamily: "Roboto" }}
        >
          {info[props.index - 1]}
        </span>
      </div>
      <div className="w-1/5 logo-box flex justify-center">
        <svg
          viewBox="0 0 45 44"
          className="h-12 w-12 cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="22.6866"
            cy="22"
            rx="21.9254"
            ry="22"
            fill="url(#paint0_linear)"
          />
          <path
            d="M33.1036 22L16.7339 11.5475V32.4525L33.1036 22Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="45.6339"
              y1="-3.05114e-05"
              x2="0.268851"
              y2="1.47004"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D81F26" />
              <stop offset="1" stop-color="#C50B4E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Episode;
