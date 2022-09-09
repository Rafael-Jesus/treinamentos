import React, { useState } from "react";
import api from "../../config/configAPI";
import "../../style/ModalEdita.css";

function ModalEdita(props) {
  const [nameTreinamento, setNameTreinamento] = useState(
    props.data.nametreinamento
  );
  const [setor, setSetor] = useState(props.data.setor);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const editFile = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", props.data.file);
    const  data = {
      "nameTreinamento": nameTreinamento,
      "setor": setor,
      "idTreinamento": props.data.id
    }
    // const dataEdit = Object.entries(data) 

    await api
      .post("/edit-file", data)
      .then((res) => {
        setStatus({
          type: "success",
          message: res.data.message,
        });

        // fechando modal
        window.location.href = "#";

        //limpando o input do modal
        document.getElementsByName("file").values("");
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
  };



  return (
    <>
    <div id={"modalEdita" + props.data.id} className="modal">
      <div className="modal-content">
        <h2>
          {props.title}
          {props.data.nametreinamento}
        </h2>
        <input
          className="inputEdita"
          value={nameTreinamento}
          placeholder="Entre com o novo nome..."
          onChange={(e) => setNameTreinamento(e.target.value)}
        />
        <input className="inputEdita" value={"Setor: " + setor} disabled />
        <select id="selectSetorE" defaultValue="" onChange={(e) => setSetor(e.target.value)}>
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
            onClick={editFile}
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
