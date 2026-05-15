import { useState } from "react";
import { DEFAULT_ROLE, ROLE_LABELS } from "../constants/userRoles";
import { useUser } from "../hooks/useUser";

const INITIAL_FORM = {
  email: "Ana@example.com",
  name: "Ana Pérez",
  role: DEFAULT_ROLE,
};

export default function LoginForm() {
  const { login, loading, error } = useUser();
  const [formData, setFormData] = useState(INITIAL_FORM);

  function updateField(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await login(formData);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login__title"> Inicia Sesión</h2>
      
      <div className="login__form-group">
        <label className="login__label" htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={updateField}
          className="login__input"
          placeholder="Tu nombre"
        />
      </div>

      <div className="login__form-group">
        <label className="login__label" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={updateField}
          className="login__input"
          placeholder="tu@email.com"
        />
      </div>

      <div className="login__form-group">
        <label className="login__label" htmlFor="role">
          Selecciona tu rol:
        </label>
        <select 
          id="role"
          name="role"
          value={formData.role}
          onChange={updateField}
          className="login__select"
        >
          {Object.entries(ROLE_LABELS).map(([roleValue, label]) => (
            <option key={roleValue} value={roleValue}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button 
        type="submit"
        aria-label="Iniciar sesión"
        className="button button--login"
        disabled={loading}
      >
        {loading ? " Iniciando sesión..." : "✓ Iniciar Sesión"}
      </button>

      {error && (
        <p className="login__error">
          {error}
        </p>
      )}
    </form>
  );
}
