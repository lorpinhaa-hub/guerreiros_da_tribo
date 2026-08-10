import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { EVENTOS } from '../data/eventos';

export default function Eventos() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>📅 Próximos Eventos</h2>
        {EVENTOS.map(e => (
          <div key={e.id} style={estilos.cartao}>
            <h3>{e.nome}</h3>
            <p>📅 {e.data}</p>
            <p>📍 {e.local}</p>
            <span style={estilos.tipo}>{e.tipo}</span>
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
  cartao: { background: "rgba(255,255,255,0.15)", padding: "18px", borderRadius: "10px", marginBottom: "12px" },
  tipo: { display: "inline-block", marginTop: "8px", padding: "3px 10px", background: "#ffcc00", color: "#000", borderRadius: "12px", fontSize: "13px" }
};
