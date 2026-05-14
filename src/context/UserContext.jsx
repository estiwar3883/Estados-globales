import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setLoading(true);
        setError("");

        return new Promise((resolve) => {
            setTimeout(() => {
                if (!userData.email) {
                    setError("Email is required");
                    setLoading(false);
                    return;
                }

                const validRoles = ["admin", "student", "guest"];
                if (!validRoles.includes(userData.role)) {
                    setError("Invalid role");
                    setLoading(false);
                    return;
                }

                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                setLoading(false);
                resolve({
                    success: true,
                    message: "Login successful"
                });
            }, 2000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const isAuthenticated = !!user;

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                loading,
                error,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}; 
