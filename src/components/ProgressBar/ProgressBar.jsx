import React, { useEffect, useState } from "react";

import { MAX, MIN } from "./Contant";

function ProgressBar({ value = 0, onComplete }) {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
    if (percentage === MAX) {
      onComplete();
    }
  }, [value]);
  return (
    <div>
      <h2>Progress Bar</h2>
      <div className="bg-gray-200 w-1/3 m-auto rounded-md relative h-6 border-2 border-black overflow-hidden">
        <span
          style={{
            color: percentage >= 49 ? "#fff" : undefined,
          }}
          className="absolute flex justify-center items-center h-full w-full z-10"
        >
          {percentage.toFixed()}%
        </span>
        <div
          //   style={{ width: `${percentage}%` }}
          style={{
            transform: `scaleX(${percentage / MAX})`,
            transformOrigin: "left",
          }}
          class="bg-green-400  h-full"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
