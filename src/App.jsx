import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
import RoleContent from "./components/RoleContent";
import ProtectedView from "./components/ProtectedView";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <LoginForm />

        <div className="app__section">
          <LogoutButton />
        </div>

        <div className="app__section">
          <UserProfile />
        </div>

        <div className="app__section">
          <RoleContent />
        </div>

        <div className="app__section">
          <ProtectedView>
            <p className="private-content">
              🔒 Este es un contenido privado.
            </p>
          </ProtectedView>
        </div>
      </div>
    </div>
  );
}

export default App;
