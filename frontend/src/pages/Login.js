import React from "react";
import "../style/login.css";
import logo from "../images/logo.png";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaUserAlt, FaChevronRight, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <div className="containerCad">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="logo">
                <img src={logo} width="100px" />
              </div>
              <div className="login__field">
                <FaUserAlt size={15} className="login__icon" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email..."
                />
              </div>
              <div className="login__field">
                <FaLock size={15} className="login__icon" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Senha..."
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">ENTRAR</span>
                <FaChevronRight className="button__icon fas" />
              </button>
            </form>
            <div className="social-login">
              <h3>Nos siga no...</h3>
              <div className="social-icons">
                <a
                  target="_blank"
                  href="https://www.instagram.com/globallivetelecom/"
                  className="social-login__icon fab fa-instagram"
                >
                  <BsInstagram />
                </a>
                <a
                  target="_blank"
                  href="https://pt-br.facebook.com/globallivetelecom/"
                  className="social-login__icon fab fa-facebook"
                >
                  <BsFacebook />
                </a>
                {/* <a href="#" className="social-login__icon fab fa-twitter">
                <BsTwitter />
              </a> */}
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
