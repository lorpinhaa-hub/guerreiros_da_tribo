import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { VIDEOS } from '../data/videos';

export default function Videos() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>🎬 Vídeos</h2>
        {VIDEOS.map(v => (
          <div key={v.id} style={estilos.cartao}>
            <h4>{v.titulo}</h4>
            <span style={estilos.categoria}>{v.categoria}</span>
            <iframe src={v.url} title={v.titulo} style={estilos.video} allowFullScreen />
          </div>
        ))}
      </main>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", background: "#004d26" },
  conteudo: { padding: "20px", maxWidth: "600px", margin: "0 auto" },
  titulo: { fontSize: "20px", marginBottom: "20px" },
  cartao: { background: "rgba(255,255,255,0.15)", padding: "15px", borderRadius: "10px", marginBottom: "15px" },
  categoria: { display: "inline-block", fontSize: "12px", background: "#ffcc00", color: "#000", padding: "2px 8px", borderRadius: "10px", margin: "6px 0 10px" },
  video: { width: "100%", aspectRatio: "16/9", border: "none", borderRadius: "8px" }
};
