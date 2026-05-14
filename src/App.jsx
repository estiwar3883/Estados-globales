import Navbar from "./components/Navbar";

import LoginButton from "./components/LoginButton";

import LogoutButton from "./components/LogoutButton";

import UserProfile from "./components/UserProfile";

import RoleContent from "./components/RoleContent";

import ProtectedView from "./components/ProtectedView";

const containerStyle = {
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const contentStyle = {
  padding: "20px",
};

const sectionStyle = {
  backgroundColor: "white",
  padding: "25px",
  margin: "20px auto",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "900px",
};

const hrStyle = {
  backgroundColor: "#e0e0e0",
  height: "1px",
  border: "none",
  margin: "20px 0",
};

function App() {
  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={contentStyle}>
        <LoginButton />

        <div style={sectionStyle}>
          <LogoutButton />
        </div>

        <div style={sectionStyle}>
          <UserProfile />
        </div>

        <div style={sectionStyle}>
          <RoleContent />
        </div>

        <div style={sectionStyle}>
          <ProtectedView>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              🔒 Este es un contenido privado.
            </p>
          </ProtectedView>
        </div>
      </div>
    </div>
  );
}

export default App;