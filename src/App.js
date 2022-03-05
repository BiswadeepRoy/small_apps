import React, { useState } from "react";
import './App.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [isIntervalStarted, setIsIntervalStarted] = useState(false);

  const startTimer = () => {
    setSec((prevSec) => {
      if (prevSec === 59) {
        console.log("Hello " + prevSec);
        setMin((prevMin) => prevMin + 0.5);
        return 0;
      } else {
        return prevSec + 1;
      }
    });
  };
  const startClockInterval = () => {
    const clockInterval = setInterval(startTimer, 1000);
    setIntervalId(clockInterval);
    setIsIntervalStarted(true);
  };
  const stopClockInterval = () => {
    clearInterval(intervalId);
    setIsIntervalStarted(false);
  };

  const resetClock = () => {
    clearInterval(intervalId);
    setIsIntervalStarted(false);
    setSec(0);
    setMin(0);
  };

  return (
    <div className="App">
      <h3>
        {min < 10 ? `0${min}` : `${min}`}:{sec < 10 ? `0${sec}` : `${sec}`}
      </h3>
      <button disabled={isIntervalStarted} onClick={startClockInterval}>
        Start
      </button>
      <button disabled={!isIntervalStarted} onClick={stopClockInterval}>
        Stop
      </button>
      <button disabled={!isIntervalStarted} onClick={resetClock}>
        Reset
      </button>
    </div>
  );
}
