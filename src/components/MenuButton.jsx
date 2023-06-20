import React, { useContext } from "react";
import "./MenuButton.css";
import { Link } from "react-scroll";
import { AppContext } from "../context/AppContext";

const MenuButton = ({ index }) => {

  const [state] = useContext(AppContext);

  const keys = state?.keys || [];

  const value = keys[index];

  return (
    <div
      className="menuButton"
      style={{
        float: "left",
        padding: "0.9em",
        textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
      }}
    >
      <Link
        id={value.name}
        activeClass="active"
        to={value.desteny}
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        delay={30
        }
      >
        {value.name}
      </Link>

    </div>
  );
}

export default MenuButton;
