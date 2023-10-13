//https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main>
      <img src="https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png" />
      <nav>
        <NavLink to="/" className="homelink">
          <button>Volver</button>
        </NavLink>
      </nav>
    </main>
  );
};

export default NotFound;
