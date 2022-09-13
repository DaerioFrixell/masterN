import React from "react";
import { Link } from 'react-router-dom';
import './menuList.scss'

export const MenuList = () => {
  return (
    <nav className="menu-list">
      <Link className="menu-item" to='/smthPage'>SmthPage</Link>
      <Link className="menu-item" to='/form'>Form</Link>
      <Link className="menu-item" to='/nigga'>Black Nigga</Link>
    </nav>
  )
}