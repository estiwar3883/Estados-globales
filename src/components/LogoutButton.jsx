import { useUser } from "../hooks/useUser";

export default function LogoutButton() {
  const { logout, user } = useUser();

  if (!user) return null;

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <button 
      onClick={logout} 
      aria-label="Cerrar sesión"
      style={buttonStyle}
      onMouseEnter={(e) => e.target.style.backgroundColor = "#dc2626"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#ef4444"}
    >
       Cerrar Sesión
    </button>
  );
}