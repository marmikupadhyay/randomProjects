import React from "react";

function BackGroundVector() {
  return (
    <svg
      className="h-screen w-screen fixed z-20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M-56.5 1194.5V181.5C-143.5 -85 210 -102 210 228C210 558 551.5 338 673 702.5C794.5 1067 1197 766.5 1527 818.5C1791 860.1 1735.33 1086.5 1674.5 1194.5H-56.5Z"
          fill="#1A194B"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-75.2769"
          y="-61.0745"
          width="1835.4"
          height="1255.57"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="15" dy="-22" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0 0.270833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default BackGroundVector;
