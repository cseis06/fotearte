import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery'; // Asegúrate de que la ruta sea correcta
import Home from './pages/home/Home'; // Asegúrate de que la ruta sea correcta
import Camera from './pages/camera/Camera'; // Asegúrate de que la ruta sea correcta
import Course from './pages/course/Course'; // Asegúrate de que la ruta sea correcta
import Contact from './pages/contact/Contact'; // Asegúrate de que la ruta sea correcta
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
