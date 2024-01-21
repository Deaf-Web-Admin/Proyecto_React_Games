import "./TTT.css";

import { useContext, useState } from "react";
import { UserContext } from "../../context/usercontext";
import JSConfetti from "js-confetti";

const TTT = () => {
  const { user, logout } = useContext(UserContext);
  const [queTurno, setqueTurno] = useState("X");
  const jsConfetti = new JSConfetti();

  const elRelojito = () => {
    setInterval(Comprobar(), 1000);
  };

  const changeState = () => {
    setqueTurno(localStorage.getItem("Turno"));

    if (localStorage.getItem("Turno") == "X") {
      localStorage.setItem("Turno", "0");
    } else {
      localStorage.setItem("Turno", "X");
    }
    elRelojito();
  };

  const Comprobar = () => {
    if (
      (localStorage.getItem("Casilla1") == localStorage.getItem("Casilla2") &&
        localStorage.getItem("Casilla1") == localStorage.getItem("Casilla3") &&
        localStorage.getItem("Casilla1") !== "") ||
      (localStorage.getItem("Casilla4") == localStorage.getItem("Casilla5") &&
        localStorage.getItem("Casilla4") == localStorage.getItem("Casilla6") &&
        localStorage.getItem("Casilla4") !== "") ||
      (localStorage.getItem("Casilla7") == localStorage.getItem("Casilla8") &&
        localStorage.getItem("Casilla7") == localStorage.getItem("Casilla9") &&
        localStorage.getItem("Casilla7") !== "") ||
      (localStorage.getItem("Casilla1") == localStorage.getItem("Casilla4") &&
        localStorage.getItem("Casilla1") == localStorage.getItem("Casilla7") &&
        localStorage.getItem("Casilla1") !== "") ||
      (localStorage.getItem("Casilla2") == localStorage.getItem("Casilla5") &&
        localStorage.getItem("Casilla2") == localStorage.getItem("Casilla8") &&
        localStorage.getItem("Casilla2") !== "") ||
      (localStorage.getItem("Casilla3") == localStorage.getItem("Casilla6") &&
        localStorage.getItem("Casilla3") == localStorage.getItem("Casilla9") &&
        localStorage.getItem("Casilla3") !== "") ||
      (localStorage.getItem("Casilla1") == localStorage.getItem("Casilla5") &&
        localStorage.getItem("Casilla1") == localStorage.getItem("Casilla9") &&
        localStorage.getItem("Casilla1") !== "") ||
      (localStorage.getItem("Casilla3") == localStorage.getItem("Casilla5") &&
        localStorage.getItem("Casilla3") == localStorage.getItem("Casilla7") &&
        localStorage.getItem("Casilla3") !== "")
    ) {
      jsConfetti.addConfetti({
        confettiRadius: 4,
        confettiNumber: 500,
      });
    } else {
      isEven();
    }
  };

  const isEven = () => {
    if (
      localStorage.getItem("Casilla1") !== "" &&
      localStorage.getItem("Casilla2") !== "" &&
      localStorage.getItem("Casilla3") !== "" &&
      localStorage.getItem("Casilla4") !== "" &&
      localStorage.getItem("Casilla5") !== "" &&
      localStorage.getItem("Casilla6") !== "" &&
      localStorage.getItem("Casilla7") !== "" &&
      localStorage.getItem("Casilla8") !== "" &&
      localStorage.getItem("Casilla9") !== ""
    ) {
      alert("Empate");
      logout();
    } else {
      console.log("");
    }
  };

  const handleClick1 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla1", localStorage.getItem("Turno"));
  };
  const handleClick2 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla2", localStorage.getItem("Turno"));
  };
  const handleClick3 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla3", localStorage.getItem("Turno"));
  };
  const handleClick4 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla4", localStorage.getItem("Turno"));
  };
  const handleClick5 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla5", localStorage.getItem("Turno"));
  };
  const handleClick6 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla6", localStorage.getItem("Turno"));
  };
  const handleClick7 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla7", localStorage.getItem("Turno"));
  };
  const handleClick8 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla8", localStorage.getItem("Turno"));
  };
  const handleClick9 = () => {
    changeState();
    Comprobar();
    localStorage.setItem("Casilla9", localStorage.getItem("Turno"));
  };
return (
    <>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif"
          className="imgInverted"
          alt="Reloj Marcando alocadamente"
        />
        <h1>Hola! {user}</h1>
        <button onClick={logout} className="Warning">
          Salir
        </button>
      </header>
      <main>
        <h2>El el turno de :{queTurno}</h2>
        <div className="Board">
          <button
            className="Sqare"
            id="boton1"
            onClick={localStorage.getItem("Casilla1") == "" ? handleClick1 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla1")}
          </button>
          <button
            className="Sqare"
            id="boton2"
            onClick={localStorage.getItem("Casilla2") == "" ? handleClick2 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla2")}
          </button>
          <button
            className="Sqare"
            id="boton3"
            onClick={localStorage.getItem("Casilla3") == "" ? handleClick3 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla3")}
          </button>
          <button
            className="Sqare"
            id="boton4"
            onClick={localStorage.getItem("Casilla4") == "" ? handleClick4 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla4")}
          </button>
          <button
            className="Sqare"
            id="boton5"
            onClick={localStorage.getItem("Casilla5") == "" ? handleClick5 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla5")}
          </button>
          <button
            className="Sqare"
            id="boton6"
            onClick={localStorage.getItem("Casilla6") == "" ? handleClick6 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla6")}
          </button>
          <button
            className="Sqare"
            id="boton7"
            onClick={localStorage.getItem("Casilla7") == "" ? handleClick7 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla7")}
          </button>
          <button
            className="Sqare"
            id="boton8"
            onClick={localStorage.getItem("Casilla8") == "" ? handleClick8 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla8")}
          </button>
          <button
            className="Sqare"
            id="boton9"
            onClick={localStorage.getItem("Casilla9") == "" ? handleClick9 : Comprobar}
          >
            {" "}
            {localStorage.getItem("Casilla9")}
          </button>
        </div>
      </main>
    </>
  );
};
//truco de los ternarios facilitado por Fareh
export default TTT;
