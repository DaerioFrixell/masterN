import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import { Header } from '../components/header/Header';
import { MenuList } from '../components/menuList/MenuList';
import { Form } from '../components/form/Form';
import { SmthPage } from '../components/smthPage/SmthPage';
import { StarWarsApi } from '../components/starWarsApi/StarWarsApi';
import { People } from '../components/starWarsApi/people/People';
import { Planets } from '../components/starWarsApi/planets/Planets';
import {Chess} from "../pages/chessPage/Chess";
import {Game} from "../pages/game/Game";

function App() {
  return (
    <div className="app">
      <Header />
      <MenuList />
      <Routes>
        <Route path='form' element={<Form />} />
        <Route path='smthPage' element={<SmthPage />} />
        <Route path='starWarsApi' element={<StarWarsApi />} />
        <Route path='people' element={<People />} />
        <Route path='planets' element={<Planets />} />
        <Route path='chess' element={<Chess />} />
        <Route path='game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
