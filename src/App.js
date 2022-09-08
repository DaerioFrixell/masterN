import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { Header } from './components/header/Header';
import { Menu } from './components/menuList/MenuList';
import { Form } from './components/form/Form';
import { SmthPage } from './components/smthPage/SmthPage';
import { Nigga } from './components/nigga/Nigga';




function App() {
  return (
    <div className="container">
      <div className='header'>
        <Header />
      </div>
      <div className='menu-list'>
        <Menu />
      </div>
      <div className='routes'>
        <Routes>
          <Route path='Form' element={<Form />} />
          <Route path='SmthPage' element={<SmthPage />} />
          <Route path='Nigga' element={<Nigga />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
