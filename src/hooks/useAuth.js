import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an authentication check (e.g., check token in localStorage)
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const login = () => {
    // Simulate login action
    localStorage.setItem("authToken", "sample-token");
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Simulate logout action
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}