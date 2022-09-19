import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';
import { Header } from './components/header/Header';
import { MenuList } from './components/menuList/MenuList';
import { Form } from './components/form/Form';
import { SmthPage } from './components/smthPage/SmthPage';
import { Nigga } from './components/nigga/Nigga';

function App() {
  return (
    <div className="app">
      <Header />
      <MenuList />
      <Routes>
        <Route path='form' element={<Form />} />
        <Route path='smthPage' element={<SmthPage />} />
        <Route path='nigga' element={<Nigga />} />
      </Routes>
    </div>
  );
}

export default App;
