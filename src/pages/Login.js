import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const navegar = useNavigate();

  const entrar = (e) => {
    e.preventDefault();
    if (email && cpf.length >= 11) {
      navegar("/home");
    } else {
      alert("Preencha e-mail e CPF corretamente!");
    }
  };

  return (
    <div style={estilos.tela}>
      <div style={estilos.caixaLogin}>
        <h1 style={estilos.titulo}>🟢 Guerreiros da Tribo</h1>
        <p style={estilos.subtitulo}>Acesse sua conta</p>
        <form onSubmit={entrar} style={estilos.form}>
          <input type="email" placeholder="Seu e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} style={estilos.input} required />
          <input type="text" placeholder="Senha (seu CPF)" value={cpf} onChange={(e)=>setCpf(e.target.value)} style={estilos.input} required />
          <button type="submit" style={estilos.botao}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

const estilos = {
  tela: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, #006633, #003319)" },
  caixaLogin: { background: "#fff", padding: "35px", borderRadius: "16px", width: "90%", maxWidth: "360px", textAlign: "center", color: "#006633" },
  titulo: { fontSize: "24px", marginBottom: "5px" },
  subtitulo: { fontSize: "14px", color: "#666", marginBottom: "25px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "15px" },
  botao: { marginTop: "10px", padding: "12px", background: "#006633", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }
};
