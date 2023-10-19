import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const login = (username) => {
    setUser(username);
    setIsAuth(true);
    navigate("/TTT");
  };

  const logout = () => {
    setUser("");
    setIsAuth(false);
    navigate("/");
    localStorage.setItem("Turno", "");
    localStorage.setItem("Casilla1", "");
    localStorage.setItem("Casilla2", "");
    localStorage.setItem("Casilla3", "");
    localStorage.setItem("Casilla4", "");
    localStorage.setItem("Casilla5", "");
    localStorage.setItem("Casilla6", "");
    localStorage.setItem("Casilla7", "");
    localStorage.setItem("Casilla8", "");
    localStorage.setItem("Casilla9", "");
  };

  return (
    <UserContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
