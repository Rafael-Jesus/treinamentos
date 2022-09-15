import React, {useState}from "react";
import api from "../../config/configAPI";
import "../../style/ModalConfirma.css";

function ModalConfirma(props) {
  const deleteFile = async (id) => {
    const formData = new FormData();
    formData.append("idUser", id);
    const result = await api.post(`/delete-user?idUser=${id}`);
    window.location.href = "#";
  };

  const [nameModal, setNameModal] = useState('#modalConfirma');
  const result = (id) => {
    return "#modalConfirma"+id;
  }

  return (
    <>
    {result}
      <div id={"modalConfirma"+props.data.id} className="modal">
        <div className="modal-content">
          <h2>
            {props.title}
          </h2>
          <div className="modal-body">
            <a href="#" className="button" id="buttonN" type="button">
              Não
            </a>
            <button
              onClick={() => deleteFile(props.data.id)}
              className="button"
              id="buttonS"
              type="button"
            >
              Sim
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

export default ModalConfirma;
