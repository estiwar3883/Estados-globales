import { useUser } from "../hooks/useUser";

export default function Navbar() {
  const { user } = useUser();
  const title = user
    ? `¡Bienvenido, ${user.name}!`
    : "Portal de Autenticación";

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <h2 className="navbar__title">{title}</h2>
    </nav>
  );
}
