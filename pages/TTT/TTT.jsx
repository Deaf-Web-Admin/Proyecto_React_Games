import "./TTT.css";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/usercontext";

const TTT = () => {
  const { user, isAuth, logout } = useContext(UserContext);
  return (
    <main>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif"
        className="imgInverted"
      />
      <button onClick={logout} className="Warning">
        Salir
      </button>
    </main>
  );
};

export default TTT;
