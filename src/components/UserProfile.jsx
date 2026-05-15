import { ROLE_LABELS } from "../constants/userRoles";
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

  const roleLabel = ROLE_LABELS[user.role] ?? user.role;

  return (
    <div>
      <h2 className="profile__title">👤 Perfil de Usuario</h2>

      <div className="profile__item">
        <span className="profile__label">Nombre:</span>
        <span className="profile__value">{user.name}</span>
      </div>

      <div className="profile__item">
        <span className="profile__label">Email:</span>
        <span className="profile__value">{user.email}</span>
      </div>

      <div className="profile__item">
        <span className="profile__label">Rol:</span>
        <span className="profile__value profile__role">
          {roleLabel}
        </span>
      </div>
    </div>
  );
}
