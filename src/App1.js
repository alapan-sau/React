import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents'
import {DISHES} from './shared/dishes.js'

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={ DISHES }/>
    </div>
  );
}

export default App;