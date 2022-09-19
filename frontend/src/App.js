import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
// import Contactus from "./pages/Contactus";
import Usuarios from "./pages/Usuarios";
import Treinamentos from "./pages/Treinamentos";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          {/* <Route path="/contactus" component={Contactus}></Route> */}
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/treinamentos" element={<Treinamentos />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
