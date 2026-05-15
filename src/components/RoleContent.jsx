import { ROLE_CONTENT, USER_ROLES } from "../constants/userRoles";
import { useUser } from "../hooks/useUser";

export default function RoleContent() {
  const { user } = useUser();
  const currentRole = user?.role ?? USER_ROLES.GUEST;
  const content = ROLE_CONTENT[currentRole] ?? ROLE_CONTENT[USER_ROLES.GUEST];

  return (
    <div className="role-content">
      <h3 className="role-content__title">
        {content}
      </h3>
    </div>
  );
}
