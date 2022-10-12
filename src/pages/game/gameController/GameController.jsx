import React from "react";
import './gameController.scss'
import { Button } from "../../../components/UI/button/Button"

export const GameController = () => {
  return (
    <div className='gc'>
      <div className="gc__info"    >
        <p className="gc__info-text">field</p>
        <p className="gc__info-text">field</p>
        <p className="gc__info-text">field</p>
      </div>

      <div className="gc__actions">
        <p className="gc__actions-text">field</p>
        <p className="gc__actions-text">field</p>
        <Button
          nameBtn={'knopka'} />
      </div>
    </div>

  )
}