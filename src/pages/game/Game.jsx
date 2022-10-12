import React from "react";
import './game.scss'
import { GameController } from "./gameController/GameController";

export const Game = () => {
    return (
        <div className='game'>
            <div className='game__info'>qwe</div>
            <GameController />
        </div>
    )
}