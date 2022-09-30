import React from "react";
import { Link } from 'react-router-dom';
import './starWarsApi.scss'

export const StarWarsApi = () => {

  return (
    <nav className="swa">
      <Link className="swa__link" to='/planets'>список планет</Link>
      <Link className="swa__link" to='/people'>список людей</Link>
    </nav>
  )
}
