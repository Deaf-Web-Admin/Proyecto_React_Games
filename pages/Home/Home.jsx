import "./Home.css";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/usercontext";

const Home = () => {
  const inputValue = useRef(null);
  const { login } = useContext(UserContext);
  localStorage.setItem("Turno", "X");
localStorage.setItem("Casilla1","");
localStorage.setItem("Casilla2","");
localStorage.setItem("Casilla3","");
localStorage.setItem("Casilla4","");
localStorage.setItem("Casilla5","");
localStorage.setItem("Casilla6","");
localStorage.setItem("Casilla7","");
localStorage.setItem("Casilla8","");
localStorage.setItem("Casilla9","");

  return (
    <main>
      <input type="text" placeholder="Su Nombre" ref={inputValue} autoFocus />
      <button onClick={() => login(inputValue.current.value)} className="Go">
        Jugar
      </button>
      <img src="https://media2.giphy.com/media/Awg0daMM4WxO9ee5vF/200w.gif" />
    </main>
  );
};

export default Home;
