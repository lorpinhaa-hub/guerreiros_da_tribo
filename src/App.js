import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Socios from './pages/Socios';
import Jogos from './pages/Jogos';
import Eventos from './pages/Eventos';
import Caravanas from './pages/Caravanas';
import Fotos from './pages/Fotos';
import Videos from './pages/Videos';
import Patrocinadores from './pages/Patrocinadores';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/caravanas" element={<Caravanas />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/patrocinadores" element={<Patrocinadores />} />
      </Routes>
    </Router>
  );
}
