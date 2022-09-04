import React from "react";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      <div ><Link className="menuItem" to='/smthPage'>SmthPage</Link></div>
      <div ><Link className="menuItem" to='/form'>Form</Link></div>
      <div ><Link className="menuItem" to='/nigga'>Black Nigga</Link></div>
    </div>

  )
}

export default Menu;