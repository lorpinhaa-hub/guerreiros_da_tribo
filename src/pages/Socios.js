import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { SOCIOS } from '../data/socios';

const corStatus = {
  ativo: "#00ff88",
  em_dia: "#ffdd00",
  inativo: "#ff6666"
};

export default function Socios() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>👥 Lista de Sócios ({SOCIOS.length})</h2>
        {SOCIOS.map(s => (
          <div key={s.id} style={estilos.cartao}>
            <h4>{s.nome}</h4>
            <p>📧 {s.email}</p>
            <p>📱 {s.telefone} | CPF: {s.cpf}</p>
            <span style={{...estilos.status, background: corStatus[s.status]}}>
              {s.status.replace("_", " ")}
            </span>
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
  cartao: { background: "rgba(255,255,255,0.15)", padding: "15px", borderRadius: "10px", marginBottom: "10px" },
  status: { display: "inline-block", padding: "3px 10px", borderRadius: "12px", color: "#000", fontSize: "12px", marginTop: "6px" }
};
