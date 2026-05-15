export const USER_ROLES = {
  ADMIN: "admin",
  STUDENT: "student",
  GUEST: "guest",
};

export const ROLE_LABELS = {
  [USER_ROLES.ADMIN]: "Admin",
  [USER_ROLES.STUDENT]: "Student",
  [USER_ROLES.GUEST]: "Guest",
};

export const ROLE_CONTENT = {
  [USER_ROLES.ADMIN]: "Panel de administración",
  [USER_ROLES.STUDENT]: "Panel del estudiante",
  [USER_ROLES.GUEST]: "Vista de invitado",
};

export const DEFAULT_ROLE = USER_ROLES.STUDENT;
export const VALID_ROLES = Object.values(USER_ROLES);
