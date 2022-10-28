import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path='/grandhyatt_react' element={<Main />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;