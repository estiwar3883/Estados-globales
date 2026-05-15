import { useContext } from "react";
import { UserContext } from "../context/userContext";

/**
 * Hook personalizado para acceder al contexto de usuario.
 * @throws {Error} Si se usa fuera de UserProvider.
 */
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }

  return context;
}
