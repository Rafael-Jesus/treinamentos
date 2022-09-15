import React,{useState}from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/im";
import {RiLogoutCircleLine} from "react-icons/ri"
import {FaUserCircle} from "react-icons/fa"
import "../style/Button.css";
import profile from "../images/profile.jpg";

function Button() {
  function showSubMenu (){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
  }
  return (
    <>
      <div className="action">
        <button onClick={showSubMenu} className="profile">
          <span><img src={profile} width="50px"/></span>
        </button>
        <div className="menu">
         
          <h3> <img src={profile} width="90px"/><br/>Rafael Jesus<br/><span>Desenvolvedor Web Junior</span></h3>
          <ul>
            <li><Link to="Perfil"><FaUserCircle className="icon" size={17}/>&nbsp;Meu Perfil</Link></li>
            <li><Link to=""><RiLogoutCircleLine className="icon" size={17}/>&nbsp;Sair</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Button;
