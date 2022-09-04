import React from "react";
import { useState } from "react";
import css from './OnStyleChange.module.css'

const Header = () => {

  const [bg, setBg] = useState(null)

  const down = () => {
    console.log('down true')
    setBg(css.onStyleChangeDown)
  }

  const up = () => {
    console.log('up true')
    setBg(css.onStyleChangeUp)
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

export default Header