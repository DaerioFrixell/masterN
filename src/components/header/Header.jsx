import React, { useState } from "react";
import './header.scss'

export const Header = () => {
  const [bg, setBg] = useState(null)

  const down = () => {
    setBg('on-style-change-down')
  }

  const up = () => {
    setBg('on-style-change-up')
  }

  return (
    <div className="grid" >
      <div> Hi, I am Master-Header</div>
      <div
        className={bg}
        onMouseDown={() => down()}
        onMouseUp={() => up()}
      >practice with event listener</div>
    </div >
  )
}
