import React from "react";
import { useState, useEffect } from "react";
import "./clock.scss";

export const Clock = ({ sec = 1000 }) => {
  const [date, setDate] = useState(new Date());

  const clockInterval = setInterval(() => setDate(new Date()), sec);

  useEffect(() => {
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="clock">
      <span>{date.toLocaleTimeString()}</span>
    </div>
  );
};
