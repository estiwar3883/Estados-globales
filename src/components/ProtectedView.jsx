import { useUser } from "../hooks/useUser";

export default function ProtectedView({ children }) {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return (
      <p>
        Debes iniciar sesión para ver este contenido.
      </p>
    );
  }

  return children;
}
