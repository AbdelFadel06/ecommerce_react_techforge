import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const [isConnected, setIsConnected] = useState(
    () => localStorage.getItem("auth") === "true"
  );

  const [user, setUser] = useState(() => localStorage.getItem("username") || null);

  function login({ username, password }) {
    const storedUserName = "Abdel SALIOU";
    const storedPassword = "abdel";

    if (username === storedUserName && password === storedPassword) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("username", storedUserName);
      setIsConnected(true);
      setUser(storedUserName);
      return { ok: true };
    }
    return { ok: false, message: "Username ou Mot de Passe incorrecte" };
  }

  function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    setIsConnected(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isConnected, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
  
}

export function useAuth() {
  return useContext(AuthContext);
}
