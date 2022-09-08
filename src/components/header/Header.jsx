import React from "react";
import { useState } from "react";
import './header.scss'

const Header = () => {

  const [bg, setBg] = useState(null)

  const down = () => {
    console.log('down true')
    setBg('onStyleChangeDown')
  }

  const up = () => {
    console.log('up true')
    setBg('onStyleChangeUp')
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