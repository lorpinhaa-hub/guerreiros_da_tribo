import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { JOGOS } from '../data/jogos';

export default function Jogos() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>⚽ Calendário de Jogos</h2>
        {JOGOS.map(j => (
          <div key={j.id} style={estilos.cartao}>
            <h3>{j.mandante ? "🏟️ Guarani x " : "✈️ "}{j.adversario}</h3>
            <p><strong>Data:</strong> {j.data}</p>
            <p><strong>Local:</strong> {j.local}</p>
            <p><strong>Campeonato:</strong> {j.campeonato}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", background: "#004d26" },
  conteudo: { padding: "20px", maxWidth: "700px", margin: "0 auto" },
  titulo: { fontSize: "20px", marginBottom: "20px" },
  cartao: { background: "rgba(255,255,255,0.15)", padding: "18px", borderRadius: "10px", marginBottom: "12px" }
};
