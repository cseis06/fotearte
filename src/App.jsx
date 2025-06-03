import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery'; // Asegúrate de que la ruta sea correcta
import Home from './pages/home/Home'; // Asegúrate de que la ruta sea correcta
import Camera from './pages/camera/Camera'; // Asegúrate de que la ruta sea correcta
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
};

export default App;
