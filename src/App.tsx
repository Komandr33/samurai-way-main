import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
