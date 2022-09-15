import React, { useState } from "react";
import api from "../../config/configAPI";
import "../../style/ModalEdita.css";

function ModalEdita(props) {
  const [nameUsuario, setNameUsuario] = useState(props.data.name);
  const [passUsuario, setPassUsuario] = useState(props.data.senha);
  const [loginUsuario, setLoginUsuario] = useState(props.data.login);
  const [setor, setSetor] = useState(props.data.setor);
  // const [file, setFile] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const editUser = async (e) => {
    e.preventDefault();
    const data = {
      nameUsuario: nameUsuario,
      setor: setor,
      idUser: props.data.id,
      login: loginUsuario,
      senha: passUsuario,
    };

    console.log(data);

    const teste = await api
      .post("/edit-user", data)
      .then((res) => {
        console.log(res)

        // fechando modal
        window.location.href = "#";
      })
      .catch((err) => {
        if (err.response) {
          setStatus({
            type: "error",
            message: err.res.data.message,
          });
        } else {
          setStatus({
            type: "error",
            message: "Erro: Tente novamente mais tarde!",
          });
        }
      });
      console.log(teste)
  };

  return (
    <>
      <div id={"modalEdita" + props.data.id} className="modal">
        <div className="modal-content">
          <h2>
            {props.title}
            {props.data.name}
          </h2>
          <input
            className="inputEdita"
            value={nameUsuario}
            placeholder="Entre com o novo nome..."
            onChange={(e) => setNameUsuario(e.target.value)}
          />
          <input
            className="inputEdita"
            value={loginUsuario}
            placeholder="Entre com o login/e-mail..."
            onChange={(e) => setLoginUsuario(e.target.value)}
          />
          <input
            className="inputEdita"
            value={passUsuario}
            placeholder="Entre com a senha..."
            onChange={(e) => setPassUsuario(e.target.value)}
          />
          <input className="inputEdita" value={"Setor: " + setor} disabled />
          <select
            id="selectSetorE"
            defaultValue=""
            onChange={(e) => setSetor(e.target.value)}
          >
            <option id="option1" value="" disabled>
              Selecione o novo setor...
            </option>
            <option id="option1" value={"Comercial"}>
              Comercial
            </option>
            <option id="option1" value={"Suporte"}>
              Suporte
            </option>
            <option id="option1" value={"Financeiro"}>
              Financeiro
            </option>
            <option id="option1" value={"Cancelamento"}>
              Cancelamento
            </option>
            <option id="option1" value={"Retenção"}>
              Retenção
            </option>
          </select>
          {/* <input className="inputEdita" placeholder="Entre com o novo setor..." onChange={(e) => setNameTreinamento(e.target.value)}/> */}
          <div className="modal-body">
            <a href="#" className="button" id="buttonN" type="button">
              Cancelar
            </a>
            <button
              onClick={editUser}
              className="button"
              id="buttonS"
              type="button"
            >
              Editar
            </button>
          </div>
          <a href="#" className="modal-close">
            X
          </a>
        </div>
      </div>
    </>
  );
}

export default ModalEdita;
