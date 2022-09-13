import React from "react";
import { Link } from 'react-router-dom';
import './menuList.scss'

export const MenuList = () => {
  return (
    <nav className="menu-list">
      <Link className="menu-list__link" to='/smthPage'>SmthPage</Link>
      <Link className="menu-list__link" to='/form'>Form</Link>
      <Link className="menu-list__link" to='/nigga'>Black Nigga</Link>
    </nav>
  )
}