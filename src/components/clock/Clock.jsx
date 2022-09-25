import React from "react";
import { useState, useEffect } from "react";
import "./clock.scss";

export const Clock = ({sec = 2000}) => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const clockInterval = setInterval(refreshClock, sec);
    return function cleanup() {
      clearInterval(clockInterval);
    };
  }, []);


  return (
    <div className="clock">
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
};