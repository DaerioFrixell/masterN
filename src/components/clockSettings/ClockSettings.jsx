import React from "react";
import { Button } from "../UI/button/Button";

export const ClockSettings = () => {
  return (
    <div>
      <div>
        <Button
          text="Настройка"
          className="settingsButton"
          onClick={() => alert("click")}
        />
      </div>
    </div>
  );
};
