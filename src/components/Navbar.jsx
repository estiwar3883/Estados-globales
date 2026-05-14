import { useUser } from "../hooks/useUser";

export default function Navbar() {
  const { user } = useUser();

  const navStyle = {
    padding: "20px 40px",
    backgroundColor: "#7c3aed",
    borderBottom: "none",
    boxShadow: "0 2px 8px rgba(124, 58, 237, 0.2)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    margin: "0",
  };

  return (
    <nav style={navStyle} aria-label="Navegación principal">
      {user ? (
        <h2 style={titleStyle}>
           ¡Bienvenido, {user.name}!
        </h2>
      ) : (
        <h2 style={titleStyle}> Portal de Autenticación</h2>
      )}
    </nav>
  );
}