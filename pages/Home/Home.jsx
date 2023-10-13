import "./Home.css";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/usercontext";

const Home = () => {
  const inputValue = useRef(null);
  const { login } = useContext(UserContext);
  return (
    <main>
      <input type="text" placeholder="Su Nombre" ref={inputValue} />
      <button onClick={() => login(inputValue.current.value)} className="Go">
        Jugar
      </button>
      <img src="https://media2.giphy.com/media/Awg0daMM4WxO9ee5vF/200w.gif" />
    </main>
  );
};

export default Home;
