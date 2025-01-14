import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check for stored user data on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call
      // In a real app, you'd make an actual API request here
      if (email === "admin@example.com" && password === "admin123") {
        const adminUser = {
          id: 1,
          email,
          role: "admin",
          name: "Admin User",
        };
        setUser(adminUser);
        localStorage.setItem("user", JSON.stringify(adminUser));
        navigate("/admin/dashboard");
        return { success: true };
      } else {
        const regularUser = {
          id: 2,
          email,
          role: "user",
          name: "Regular User",
        };
        setUser(regularUser);
        localStorage.setItem("user", JSON.stringify(regularUser));
        navigate("/dashboard");
        return { success: true };
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return { success: false, error: "Invalid credentials" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
