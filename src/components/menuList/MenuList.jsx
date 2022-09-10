import React from "react";
import { Link } from 'react-router-dom';
import './menuList.scss'

export const MenuList = () => {
  return (
    <div className="menu-list">
      <div><Link className="menu-item" to='/smthPage'>SmthPage</Link></div>
      <div><Link className="menu-item" to='/form'>Form</Link></div>
      <div><Link className="menu-item" to='/nigga'>Black Nigga</Link></div>
    </div>

  )
}