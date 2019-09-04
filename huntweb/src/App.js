import React from 'react';
import api from './services/api';
//import logo from './logo.svg';
//import './App.css';
import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
<Header/>
<Main/>
</div>
);


export default App;
