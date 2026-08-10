import React from 'react';

export default function Cabecalho() {
  return (
    <header style={estilos.cabecalho}>
      <h1 style={estilos.titulo}>🟢 Guerreiros da Tribo ⚪</h1>
      <p style={estilos.subtitulo}>Guarani Futebol Clube — Campinas/SP</p>
    </header>
  );
}

const estilos = {
  cabecalho: { background: "linear-gradient(90deg, #006633, #008844)", padding: "20px", textAlign: "center", borderBottom: "4px solid #fff" },
  titulo: { fontSize: "22px", color: "#fff" },
  subtitulo: { fontSize: "14px", color: "#ccffcc", marginTop: "5px" }
};
