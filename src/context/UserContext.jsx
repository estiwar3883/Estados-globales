import { useState } from "react";
import { VALID_ROLES } from "../constants/userRoles";
import { UserContext } from "./userContext";

const STORAGE_KEY = "user";
const LOGIN_DELAY_MS = 2000;

function getStoredUser() {
  const storedUser = localStorage.getItem(STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function isValidUserData(userData) {
  return Boolean(userData.email) && VALID_ROLES.includes(userData.role);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function login(userData) {
    setLoading(true);
    setError("");

    return new Promise((resolve) => {
      setTimeout(() => {
        if (!userData.email) {
          setError("El email es obligatorio");
          setLoading(false);
          resolve({ success: false });
          return;
        }

        if (!isValidUserData(userData)) {
          setError("El rol seleccionado no es válido");
          setLoading(false);
          resolve({ success: false });
          return;
        }

        setUser(userData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        setLoading(false);
        resolve({ success: true, message: "Login successful" });
      }, LOGIN_DELAY_MS);
    });
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: Boolean(user),
    loading,
    error,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
