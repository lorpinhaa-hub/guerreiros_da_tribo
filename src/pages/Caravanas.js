import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { CARAVANAS } from '../data/caravanas';

export default function Caravanas() {
  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.titulo}>🚌 Caravanas da Tribo</h2>
        {CARAVANAS.map(c => (
          <div key={c.id} style={estilos.cartao}>
            <h3>➡️ {c.destino}</h3>
            <p><strong>Data:</strong> {c.data}</p>
            <p><strong>Saída:</strong> {c.horarioSaida} — {c.localSaida}</p>
            <p><strong>Motorista:</strong> {c.motorista} — {c.telefone}</p>
            <p><strong>Valor:</strong> R$ {c.preco},00</p>
            <div style={estilos.vagas}>
              Vagas: {c.vagasOcupadas}/{c.vagasTotal}
              <div style={estilos.barraFundo}>
                <div style={{...estilos.barra, width: `${(c.vagasOcupadas/c.vagasTotal)*100}%`}}></div>
              </div>
            </div>
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
  vagas: { marginTop: "10px" },
  barraFundo: { height: "8px", background: "#555", borderRadius: "4px", marginTop: "5px" },
  barra: { height: "8px", background: "#00ff88", borderRadius: "4px" }
};
