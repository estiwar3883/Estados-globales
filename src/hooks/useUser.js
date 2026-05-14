import { useContext } from "react";

import { UserContext } from "../context/UserContext";

/**
 * Hook personalizado para acceder al contexto de usuario.
 * @returns {Object} El contexto de usuario con user, login, logout, etc.
 * @throws {Error} Si se usa fuera de UserProvider.
 */
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser debe usarse dentro de un UserProvider"
    );
  }

  return context;
}