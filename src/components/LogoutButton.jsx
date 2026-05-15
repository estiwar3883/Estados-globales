import { useUser } from "../hooks/useUser";

export default function LogoutButton() {
  const { logout, user } = useUser();

  if (!user) return null;

  return (
    <button 
      onClick={logout} 
      aria-label="Cerrar sesión"
      className="button button--logout"
    >
      Cerrar Sesión
    </button>
  );
}
