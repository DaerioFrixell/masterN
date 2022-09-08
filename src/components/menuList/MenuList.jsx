import React from "react";
import { Link } from 'react-router-dom';

import './menuList.scss'


const Menu = () => {
  return (
    <>
      <div ><Link className="menuItem" to='/smthPage'>SmthPage</Link></div>
      <div ><Link className="menuItem" to='/form'>Form</Link></div>
      <div ><Link className="menuItem" to='/nigga'>Black Nigga</Link></div>
    </>

  )
}

export default Menu;