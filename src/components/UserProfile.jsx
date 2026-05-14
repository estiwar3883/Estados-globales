import { useUser } from "../hooks/useUser";

export default function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return (
      <p>
        No existe un usuario autenticado
      </p>
    );
  }

  const profileItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#666",
  };

  const valueStyle = {
    color: "#333",
  };

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>👤 Perfil de Usuario</h2>

      <div style={profileItemStyle}>
        <span style={labelStyle}>Nombre:</span>
        <span style={valueStyle}>{user.name}</span>
      </div>

      <div style={profileItemStyle}>
        <span style={labelStyle}>Email:</span>
        <span style={valueStyle}>{user.email}</span>
      </div>

      <div style={{ ...profileItemStyle, borderBottom: "none" }}>
        <span style={labelStyle}>Rol:</span>
        <span style={{ ...valueStyle, backgroundColor: "#f0f0f0", padding: "4px 12px", borderRadius: "20px" }}>
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </span>
      </div>
    </div>
  );
}