import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './components/fail.scss'

import './App.css';
import Header from './components/Header';
import Menu from './components/MenuList';
import Form from './components/Form';
import SmthPage from './components/SmthPage';
import Nigga from './components/Nigga';




function App() {
  return (
    <div className="container">
      <div className='header'>
        <Header />
      </div>
      <div className='menuList'>
        <Menu />
      </div>
      <div className='item'>
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
