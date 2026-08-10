import React from 'react';
import Cabecalho from '../components/Cabecalho';
import MenuNavegacao from '../components/MenuNavegacao';
import { JOGOS } from '../data/jogos';
import { EVENTOS } from '../data/eventos';

export default function Home() {
  const proximosJogos = JOGOS.slice(0,2);
  const proximosEventos = EVENTOS.slice(0,2);

  return (
    <div style={estilos.tela}>
      <Cabecalho />
      <MenuNavegacao />
      <main style={estilos.conteudo}>
        <h2 style={estilos.tituloPagina}>📢 Bem-vindo, Guerreiro!</h2>

        <section style={estilos.secao}>
          <h3>⚽ Próximos Jogos</h3>
          {proximosJogos.map(j => (
            <div key={j.id} style={estilos.cartao}>
              <strong>Guarani {j.mandante ? "x" : "✈"} {j.adversario}</strong>
              <p>📅 {j.data} — {j.local}</p>
              <small>{j.campeonato}</small>
            </div>
          ))}
        </section>

        <section style={estilos.secao}>
          <h3>📅 Próximos Eventos</h3>
          {proximosEventos.map(e => (
            <div key={e.id} style={estilos.cartao}>
              <strong>{e.nome}</strong>
              <p>📅 {e.data} — 📍 {e.local}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", background: "#004d26" },
  conteudo: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
  tituloPagina: { fontSize: "20px", marginBottom: "20px", textAlign: "center" },
  secao: { marginBottom: "30px" },
  cartao: { background: "rgba(255,255,255,0.15)", padding: "15px", borderRadius: "10px", marginBottom: "10px" }
};
