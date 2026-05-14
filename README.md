# React Context API - Global User Authentication

A React + Vite project for managing authentication state with Context API.

---

## ✨ Features

- User authentication with login/logout
- Global state management without prop drilling
- Role-based access (admin, student, guest)
- Data persistence with localStorage
- Protected components
- Error handling

---

## 🛠 Technologies

- React 19
- Vite
- Context API
- Hooks
- localStorage

---

## 📁 Structure

```
src/
├── components/
├── context/
├── hooks/
├── App.jsx
└── main.jsx
```

---

## 💻 Installation

```bash
git clone <repository-url>
cd estados-globales
npm install
```

---

## 🚀 Getting Started

```bash
npm run dev
```

Open `http://localhost:5173`

### Usage

1. Click "Iniciar sesión" to log in
2. Select a role from the dropdown
3. View profile and role-based content
4. Click "Cerrar sesión" to log out

---

## 🔨 Production

```bash
npm run build
npm run preview
```

---

## 👥 Roles

- **admin** - Admin dashboard
- **student** - Student dashboard
- **guest** - Guest view

---

## 🔐 Authentication

Simulated authentication with test user:
- Name: Ana Pérez
- Email: ana@example.com
- Role: Selectable

To integrate with a real API, modify the `login` function in `UserContext.jsx`.

---

## 📝 License

Open source - for learning purposes.

```bash
npm run build
```

---

# Vista previa del build

```bash
npm run preview
```

---

# Explicación de implementación

El proyecto utiliza React Context API para compartir el estado global del usuario autenticado.

El contexto principal es:

```jsx
UserContext
```

El proveedor principal es:

```jsx
UserProvider
```

El `UserProvider` contiene:

- user
- login
- logout
- isLoading
- error
- isAuthenticated

Todos los componentes hijos pueden acceder al estado global usando:

```jsx
useContext(UserContext)
```

o mediante el custom hook:

```jsx
useUser()
```

---

# Persistencia con localStorage

La persistencia se implementó usando `localStorage`.

Funcionalidades implementadas:

- guardar usuario al iniciar sesión
- recuperar usuario al recargar la página
- eliminar usuario al cerrar sesión

---

# Funcionalidades implementadas

- Context API
- Estado global
- Login
- Logout
- Persistencia con localStorage
- Custom hook useUser
- Manejo de roles
- ProtectedView
- Simulación de loading
- Manejo básico de errores
- Arquitectura modular

---

# Flujo de la aplicación

1. Inicialmente no existe un usuario autenticado.
2. La interfaz muestra:

```txt
No has iniciado sesión
```

3. Al hacer clic en login:

- se guarda el usuario
- se actualiza el contexto
- los componentes se rerenderizan

4. Al cerrar sesión:

- user vuelve a null
- localStorage se limpia
- la interfaz vuelve al estado inicial

---

# README - Preguntas técnicas

## 1. ¿Qué problema resuelve Context API en React?

Context API resuelve el problema del prop drilling.

Permite compartir información entre múltiples componentes sin tener que pasar props manualmente por muchos niveles de componentes.

---

## 2. ¿Cuándo usarías Context API y cuándo no?

Usaría Context API para:

- autenticación
- dark mode
- idioma global
- configuraciones generales

No usaría Context API para estados que cambian constantemente o aplicaciones extremadamente grandes porque puede generar muchos rerenders.

---

## 3. ¿Qué hace el componente Provider dentro de Context API?

El Provider comparte valores globales con todos los componentes hijos.

Los componentes dentro del árbol pueden acceder al contexto usando useContext.

---

## 4. ¿Para qué sirve useContext?

useContext permite consumir valores de un contexto.

Gracias a este hook, un componente puede acceder al estado global sin necesidad de recibir props manualmente.

---

## 5. ¿Qué riesgos tiene usar Context API para manejar estados que cambian constantemente?

Puede provocar muchos rerenders.

Cuando cambia el value del Provider, múltiples componentes pueden volver a renderizarse aunque no necesiten actualizarse.

Esto puede afectar el rendimiento en aplicaciones grandes.

---

## 6. ¿Por qué puede ser útil crear un custom hook como useUser?

Mejora:

- legibilidad
- reutilización
- organización
- validación del contexto

Además evita repetir:

```jsx
useContext(UserContext)
```

en múltiples componentes.

---

## 7. ¿Qué diferencia hay entre estado local y estado global?

El estado local pertenece a un solo componente.

Ejemplo:

```jsx
const [open, setOpen] = useState(false);
```

El estado global puede compartirse entre muchos componentes.

Ejemplos:

- usuario autenticado
- tema dark/light
- idioma global

---