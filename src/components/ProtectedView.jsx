import { useUser } from "../hooks/useUser";

export default function ProtectedView({
  children,
}) {
  const { user } = useUser();

  if (!user) {
    return (
      <p>
        Debes iniciar sesión para ver este
        contenido
      </p>
    );
  }

  return children;
}