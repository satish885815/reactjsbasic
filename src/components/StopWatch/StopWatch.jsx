import React, { useEffect, useState } from "react";

function StopWatch() {
  const [isRuning, setIsRuning] = useState(false);
  const [time, setTime] = useState(0);
  function handleStart() {
    setIsRuning(true);
  }
  useEffect(() => {
    let intervalId;
    if (isRuning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRuning]);

  function handleStop() {
    setIsRuning(false);
  }
  function handleReset() {
    setTime(0);
  }
  function formateTime(time) {
    const hour = String(Math.floor(time / 3600)).padStart(2, "0");
    const minute = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const second = String(Math.floor(time % 60)).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  }
  return (
    <div class="mt-10">
      <h2 class="text-2xl font-bold">{formateTime(time)}</h2>
      <div class="flex justify-center gap-10">
        <button onClick={handleStart} class="bg-green-700 h-10 w-20">
          Start
        </button>
        <button onClick={handleStop} class="bg-red-600 h-10 w-20">
          Stop
        </button>
        <button onClick={handleReset} class="bg-blue-600 h-10 w-20">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
