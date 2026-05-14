import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function LoginButton() {
  const {
    login,
    loading,
    error,
  } = useUser();

  const [email, setEmail] = useState("Ana@example.com");
  const [name, setName] = useState("Ana Pérez");
  const [role, setRole] = useState("student");

  async function handleLogin() {
    await login({
      name: name,
      email: email,
      role: role,
    });
  }

  const loginContainerStyle = {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "40px auto",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
    textAlign: "center",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#555",
  };

  const selectStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "border-color 0.3s",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#6d28d9",
  };

  const errorStyle = {
    backgroundColor: "#fee",
    color: "#c33",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "15px",
    fontSize: "14px",
    border: "1px solid #fcc",
  };

  const loadingStyle = {
    textAlign: "center",
    color: "#7c3aed",
    marginTop: "15px",
    fontSize: "14px",
    fontWeight: "600",
  };

  return (
    <div style={loginContainerStyle}>
      <h2 style={titleStyle}> Inicia Sesión</h2>
      
      <div style={formGroupStyle}>
        <label style={labelStyle}>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          placeholder="Tu nombre"
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder="tu@email.com"
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle}>Selecciona tu rol:</label>
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="admin"> Admin</option>
          <option value="student">Student</option>
          <option value="guest"> Guest</option>
        </select>
      </div>

      <button 
        onClick={handleLogin} 
        aria-label="Iniciar sesión"
        style={buttonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#6d28d9"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#7c3aed"}
        disabled={loading}
      >
        {loading ? " Iniciando sesión..." : "✓ Iniciar Sesión"}
      </button>

      {error && (
        <p style={errorStyle}>
          {error}
        </p>
      )}
    </div>
  );
}