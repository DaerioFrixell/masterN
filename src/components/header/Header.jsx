import React, { useState } from "react";
import './header.scss'

export const Header = () => {
  const [bg, setBg] = useState(null)

  const down = () => {
    setBg('mouse-down')
  }

  const up = () => {
    setBg('mouse-up')
  }

  return (
    <div className="header" >
      <div className="header__logo"> Hi, I am Master-Header</div>
      <div
        className={bg}
        onMouseDown={down}
        onMouseUp={up}
      >practice with event listener</div>
    </div >
  )
}
