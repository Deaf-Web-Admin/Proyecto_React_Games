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
  };

  return (
    <UserContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
