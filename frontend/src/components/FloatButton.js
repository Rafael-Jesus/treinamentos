import React, { useState } from "react";
import "../style/FloatButton.css";
import api from "../config/configAPI";
import { MdCloudUpload } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";

function FloatButton(props) {
  const [nameTreinamento, setNameTreinamento] = useState("");
  const [setor, setSetor] = useState("");
  const [file, setFile] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nameTreinamento", nameTreinamento);
    formData.append("setor", setor);

    await api
      .post("/upload-file",formData)
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
      <div id="modalCadastroTreino" className="modal">
        <div className="modal-content">
          <h1>Cadastro de Treinamento</h1>

          <input
            className="inputAdd"
            placeholder="Nome do treinamento..."
            onChange={(e) => setNameTreinamento(e.target.value)}
          />

          <select
            id="selectSetor"
            defaultValue=""
            onChange={(e) => setSetor(e.target.value)}
          >
            <option id="option1" value="" disabled>
              Selecione o setor...
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

          <input
            id="uploadFile"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="application/pdf"
            name="file"
          />

          <label htmlFor="uploadFile">
            {" "}
            <MdCloudUpload size={30} />
            &nbsp;Selecione o Arquivo
          </label>

          <button className="button" type="button" onClick={uploadFile}>
            Cadastrar&nbsp;
            <AiFillFilePdf size={25} />
          </button>
          <a href="#" className="modal-close">
            X
          </a>
        </div>
      </div>

      <a href="#modalCadastroTreino" className="btn-floating">
        <h1 className="add">+</h1>
      </a>
    </>
  );
}

export default FloatButton;
