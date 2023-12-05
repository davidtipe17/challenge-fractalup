import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Page from './components/Page';
import Home from './pages/Home';
import Vista1 from './pages/Vista1';
import Vista2 from './pages/Vista2';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vista1" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;