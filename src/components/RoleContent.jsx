import { useUser } from "../hooks/useUser";

const ROLE_CONTENT = {
  admin: "Panel de administración",
  student: "Panel del estudiante",
  guest: "Vista de invitado",
};

export default function RoleContent() {
  const { user } = useUser();

  const content = user ? ROLE_CONTENT[user.role] || ROLE_CONTENT.guest : ROLE_CONTENT.guest;

  const roleIconMap = {
    admin: "👨‍💼",
    student: "👨‍🎓",
    guest: "👤",
  };

  const icon = roleIconMap[user?.role] || "👤";

  const contentStyle = {
    padding: "20px",
    backgroundColor: "#f0f4ff",
    borderRadius: "8px",
    borderLeft: "4px solid #7c3aed",
  };

  return (
    <div style={contentStyle}>
      <h3 style={{ color: "#7c3aed", margin: "0" }}>
        {icon} {content}
      </h3>
    </div>
  );
}