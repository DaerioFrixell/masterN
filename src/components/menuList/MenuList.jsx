import React from "react";
import { Link } from 'react-router-dom';

import './menuList.scss'


export const Menu = () => {
  return (
    <div>
      <div ><Link className="menu-item" to='/smthPage'>SmthPage</Link></div>
      <div ><Link className="menu-item" to='/form'>Form</Link></div>
      <div ><Link className="menu-item" to='/nigga'>Black Nigga</Link></div>
    </div>

  )
}