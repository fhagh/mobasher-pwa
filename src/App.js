import React from 'react';
import './App.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.scss';
import HomeRoot from './pages/home/HomeRoot'
import Login from './pages/login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    < >

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={<HomeRoot/>}/>
        </Routes>
   
      
    </>
  );
}

export default App;
