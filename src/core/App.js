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
      </Routes>
    </div>
  );
}

export default App;
