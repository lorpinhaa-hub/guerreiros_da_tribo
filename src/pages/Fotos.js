import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { FOTOS } from '../data/fotos';

export default function Fotos() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>📸 Galeria de Fotos</h2>
        <div style={estilos.grid}>
          {FOTOS.map(f => (
            <div key={f.id} style={estilos.cartao}>
              <img src={f.url} alt={f.titulo} style={estilos.imagem} />
              <p style={estilos.legenda}>{f.titulo}</p>
              <span style={estilos.categoria}>{f.categoria}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", background: "#004d26" },
  conteudo: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
  titulo: { fontSize: "20px", marginBottom: "20px", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: "15px" },
  cartao: { background: "rgba(255,255,255,0.15)", borderRadius: "10px", overflow: "hidden" },
  imagem: { width: "100%", height: "150px", objectFit: "cover" },
  legenda: { padding: "8px 10px 2px", fontWeight: "bold", fontSize: "14px" },
  categoria: { display: "inline-block", margin: "0 10px 10px", fontSize: "12px", background: "#008844", padding: "2px 8px", borderRadius: "10px" }
};
