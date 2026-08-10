import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { PATROCINADORES } from '../data/patrocinadores';

const corNivel = {
  ouro: "#ffcc00",
  prata: "#c0c0c0",
  bronze: "#cd7f32"
};

export default function Patrocinadores() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>🤝 Nossos Patrocinadores</h2>
        {PATROCINADORES.map(p => (
          <div key={p.id} style={estilos.cartao}>
            <h4>{p.nome}</h4>
            <span style={{...estilos.faixa, background: corNivel[p.nivel], color: "#000"}}>
              {p.nivel.toUpperCase()}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", background: "#004d26" },
  conteudo: { padding: "20px", maxWidth: "600px", margin: "0 auto" },
  titulo: { fontSize: "20px", marginBottom: "20px", textAlign: "center" },
  cartao: { background: "rgba(255,255,255,0.15)", padding: "15px", borderRadius: "10px", marginBottom: "10px", textAlign: "center" },
  faixa: { display: "inline-block", marginTop: "8px", padding: "3px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }
};
