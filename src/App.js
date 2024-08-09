import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/work';
import Home from './pages/home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
    </Routes>
  );
}

export default App;
