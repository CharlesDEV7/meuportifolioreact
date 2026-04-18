import { useState, useEffect } from "react";

/* ── Foto embutida como base64 ────────────────────────────── */
const FOTO =  + foto_uri + r;

/* ── DADOS DOS PROJETOS (array de objetos) ────────────────── */
const meusProjetos = [
  {
    id: 1,
    titulo: "Projeto 01 - SIGEC Em Desenvolvimento",
    descricao: "Sistema de gerenciamento de estoque para uma empresa de comércio eletrônico.",
    link: "https://github.com/CharlesDEV7",
    tag: "Em Desenvolvimento",
  },
  {
    id: 2,
    titulo: "Projeto 02 - Portfólio",
    descricao: "Meu portfólio de apresentação feito com HTML, CSS e JavaScript.",
    link: "https://github.com/CharlesDEV7",
    tag: "Concluído",
  },
];

/* ═══════════════════════════════════════════════════════════
   COMPONENTE: Navbar
   ═══════════════════════════════════════════════════════════ */
function Navbar({ darkMode, toggleTema }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header style={{
      background: darkMode ? "#1e293b" : "#117962",
      padding: "1rem 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
    }}>
      <h1 style={{
        color: darkMode ? "#f1f5f9" : "#ddd8e2",
        fontSize: "1.4rem",
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 700,
      }}>
        Meu Portfólio
      </h1>

      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: 20, alignItems: "center", margin: 0, padding: 0 }}>
          {["sobre", "projetos", "contato"].map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: darkMode ? "#f1f5f9" : "#ddd8e2",
                  fontWeight: 600,
                  fontSize: "1rem",
                  fontFamily: "'Segoe UI', sans-serif",
                  textTransform: "capitalize",
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTema}
              style={{
                padding: "5px 14px",
                cursor: "pointer",
                background: darkMode ? "#3b82f6" : "#2a2394",
                color: "white",
                border: "none",
                borderRadius: 5,
                fontWeight: "bold",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              {darkMode ? "Claro" : "Escuro"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTE: Sobre
   ═══════════════════════════════════════════════════════════ */
function Sobre({ darkMode }) {
  return (
    <section
      id="sobre"
      style={{
        padding: "60px 5%",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 30, color: darkMode ? "#f1f5f9" : "#ddd8e2fb", textAlign: "center" }}>
        Sobre Mim
      </h2>
      <img
        src={FOTO}
        alt="Foto de Jean Charles"
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          marginBottom: 20,
          border: `4px solid ${darkMode ? "#1e293b" : "#117962"}`,
          objectFit: "cover",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      />
      <p style={{ color: darkMode ? "#f1f5f9" : "#ddd8e2fb", lineHeight: 1.6, maxWidth: 600, fontSize: "1rem" }}>
        Sou estudante de Sistemas para Internet, e evoluindo no campo do desenvolvimento
        web para futuramente ser um profissional qualificado.
      </p>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTE: CardProjeto
   ═══════════════════════════════════════════════════════════ */
function CardProjeto({ projeto, darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: darkMode ? "#1e293b" : "#117962",
        padding: 20,
        borderRadius: 10,
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.25)"
          : "0 4px 6px rgba(0,0,0,0.1)",
        flex: "1 1 300px",
        maxWidth: 400,
        transition: "box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <span style={{
        alignSelf: "flex-start",
        fontSize: "0.72rem",
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: 20,
        background: projeto.tag === "Concluído" ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
        color: projeto.tag === "Concluído" ? "#10b981" : "#f59e0b",
        border: `1px solid ${projeto.tag === "Concluído" ? "#10b981" : "#f59e0b"}`,
        fontFamily: "'Segoe UI', sans-serif",
        letterSpacing: "0.04em",
      }}>
        {projeto.tag}
      </span>

      <h3 style={{ color: darkMode ? "#f1f5f9" : "#ddd8e2", fontSize: "1rem", fontFamily: "'Segoe UI', sans-serif" }}>
        {projeto.titulo}
      </h3>
      <p style={{ color: darkMode ? "#cbd5e1" : "#e2dce8", lineHeight: 1.6, fontSize: "0.92rem", fontFamily: "'Segoe UI', sans-serif" }}>
        {projeto.descricao}
      </p>
      <a
        href={projeto.link}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: "auto",
          color: darkMode ? "#3b82f6" : "#ddd8e2",
          fontWeight: 600,
          textDecoration: "none",
          fontSize: "0.9rem",
          fontFamily: "'Segoe UI', sans-serif",
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        Ver no GitHub →
      </a>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTE: Projetos  (renderiza o array dinamicamente)
   ═══════════════════════════════════════════════════════════ */
function Projetos({ darkMode }) {
  return (
    <section
      id="projetos"
      style={{ padding: "60px 5%", maxWidth: 1200, margin: "0 auto" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 30, color: darkMode ? "#f1f5f9" : "#ddd8e2fb" }}>
        Meus Projetos
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 25, marginTop: 30 }}>
        {meusProjetos.map((projeto) => (
          <CardProjeto key={projeto.id} projeto={projeto} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTE: Contato
   ═══════════════════════════════════════════════════════════ */
function Contato({ darkMode }) {
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.msg) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setForm({ nome: "", email: "", msg: "" });
    }, 3000);
  };

  const inputSt = {
    padding: 14,
    border: `2px solid ${darkMode ? "#334155" : "#edf2f7"}`,
    borderRadius: 8,
    fontFamily: "'Segoe UI', sans-serif",
    fontSize: "1rem",
    background: darkMode ? "#0f172a" : "#f8fafc",
    color: darkMode ? "#f1f5f9" : "#1e293b",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section id="contato" style={{ padding: "60px 5%", maxWidth: 1200, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, color: darkMode ? "#f1f5f9" : "#ddd8e2fb" }}>
        Contato
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: darkMode ? "#1e293b" : "#117962",
          padding: 40,
          borderRadius: 16,
          maxWidth: 550,
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          border: darkMode ? "1px solid #334155" : "1px solid #0e6b55",
        }}
      >
        {enviado && (
          <div style={{
            background: "rgba(16,185,129,0.12)",
            border: "1px solid #10b981",
            borderRadius: 8,
            padding: "12px 16px",
            marginBottom: 20,
            color: "#10b981",
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 600,
            textAlign: "center",
          }}>
            ✓ Obrigado, {form.nome || "você"}! Mensagem enviada com sucesso.
          </div>
        )}

        {[
          { label: "Nome:", id: "nome", type: "text", placeholder: "Seu nome" },
          { label: "E-mail:", id: "email", type: "email", placeholder: "seu@email.com" },
        ].map(({ label, id, type, placeholder }) => (
          <div key={id} style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
            <label style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px", color: darkMode ? "#cbd5e1" : "#ddd8e2", fontFamily: "'Segoe UI', sans-serif" }}>
              {label}
            </label>
            <input
              type={type}
              name={id}
              value={form[id]}
              onChange={handleChange}
              placeholder={placeholder}
              style={inputSt}
            />
          </div>
        ))}

        <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
          <label style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px", color: darkMode ? "#cbd5e1" : "#ddd8e2", fontFamily: "'Segoe UI', sans-serif" }}>
            Mensagem:
          </label>
          <textarea
            name="msg"
            value={form.msg}
            onChange={handleChange}
            placeholder="Sua mensagem..."
            rows={5}
            style={{ ...inputSt, resize: "vertical", minHeight: 120 }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: 10,
            padding: 16,
            background: darkMode ? "#3b82f6" : "#2a2394",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Segoe UI', sans-serif",
            transition: "background 0.2s",
          }}
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP PRINCIPAL
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTema = () => setDarkMode((prev) => !prev);

  const bg = darkMode ? "#0f172a" : "#071408";
  const textColor = darkMode ? "#f1f5f9" : "#ddd8e2fb";

  return (
    <div style={{ background: bg, minHeight: "100vh", color: textColor, fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.6 }}>
      <style>{`* { margin:0; padding:0; box-sizing:border-box; } body { background: ${bg}; }`}</style>

      <Navbar darkMode={darkMode} toggleTema={toggleTema} />
      <Sobre darkMode={darkMode} />
      <Projetos darkMode={darkMode} />
      <Contato darkMode={darkMode} />

      <footer style={{
        textAlign: "center",
        padding: 30,
        background: darkMode ? "#020617" : "#ddd8e2fb",
        color: darkMode ? "#f1f5f9" : "rgb(14,10,10)",
        marginTop: 40,
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        © 2026 - Desenvolvido por Jean Chales
      </footer>
    </div>
  );
}
