import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuNavegacao() {
  const itens = [
    { caminho: "/home", nome: "Início" },
    { caminho: "/socios", nome: "Sócios" },
    { caminho: "/jogos", nome: "Jogos" },
    { caminho: "/eventos", nome: "Eventos" },
    { caminho: "/caravanas", nome: "Caravanas" },
    { caminho: "/fotos", nome: "Fotos" },
    { caminho: "/videos", nome: "Vídeos" },
    { caminho: "/patrocinadores", nome: "Patrocinadores" }
  ];

  return (
    <nav style={estilos.nav}>
      {itens.map(item => (
        <Link key={item.caminho} to={item.caminho} style={estilos.link}>
          {item.nome}
        </Link>
      ))}
    </nav>
  );
}

const estilos = {
  nav: { display: "flex", flexWrap: "wrap", gap: "8px", padding: "15px", background: "#004d26", justifyContent: "center" },
  link: { color: "#fff", background: "#006633", padding: "8px 14px", borderRadius: "20px", textDecoration: "none", fontSize: "14px" }
};
