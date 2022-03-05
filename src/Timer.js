import React, { useState } from "react";
import './App.css';
import Fab from '@mui/material/Fab';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tooltip from '@mui/material/Tooltip';

export default function Timer() {
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
    <div className="App timerbody">
      <Tooltip title="Press the respective buttons to start stop and reset the timer" placement="bottom">
        <h1 className="clock">
          {min < 10 ? `0${min}` : `${min}`}:{sec < 10 ? `0${sec}` : `${sec}`}
        </h1>
      </Tooltip>
      <div className="clockbuttons">
        <Fab variant="extended" color="primary" aria-label="add"
          disabled={isIntervalStarted} onClick={startClockInterval}>
          <AccessTimeIcon sx={{ mr: 1 }} />
          Start
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add"
          disabled={!isIntervalStarted} onClick={stopClockInterval}>
          <AccessTimeIcon sx={{ mr: 1 }} />
          Stop
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add"
          disabled={!isIntervalStarted} onClick={resetClock}>
          <AccessTimeIcon sx={{ mr: 1 }} />
          Reset
        </Fab>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
