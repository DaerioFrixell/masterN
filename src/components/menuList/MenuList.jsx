import React from "react";
import { Link } from 'react-router-dom';
import './menuList.scss'

export const MenuList = () => {
  return (
    <div className="menu-list">
      <Link className="menu-list__link" to='/smthPage'>SmthPage</Link>
      <Link className="menu-list__link" to='/form'>Form</Link>
      <Link className="menu-list__link" to='/starWarsApi'>Star Wars Api</Link>
    </div>
  )
}