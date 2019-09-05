import React, { Component } from "react";
import Routes from './routes';

//import api from './services/api';
//import logo from './logo.svg';
//import './App.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
<Header/>
<Routes/>
</div>
);


export default App;
