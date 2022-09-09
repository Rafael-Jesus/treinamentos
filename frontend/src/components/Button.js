import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/im";
import "../style/Button.css";

function Button() {
  return (
    <>
      <Link to="perfil">
        <button className="btn">
          <span> <Icons.ImUser size={40}/></span>
        </button>
      </Link>
    </>
  );
}

export default Button;
