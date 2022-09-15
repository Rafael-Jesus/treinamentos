import React, { useEffect, useState, useCallback } from "react";
import api from "../config/configAPI";

import Card from "../components/Usuarios/Card.js";
import FloatButton from "../components/Usuarios/FloatButton.js";

import ModalConfirma from "../components/Usuarios/ModalConfirma.js";
import ModalEdita from "../components/Usuarios/ModalEdita.js";

function Usuarios() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [idTreinamento, setIdTreinamento] = useState(0);

  const getFiles = async () => {
    await api
      .get("/list-users")
      .then((response) => {
        //  .map((file) => {
        setData(response.data.files);
        // })
        setUrl(response.data.url);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    setInterval(() => {
    getFiles();
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        {data.map((v) => (
          <Card
            key={v.id}
            // title={file.nametreinamento}
            buttonName="Acessar"
            // position={k + 1}
            link={url + v.file}
            // idTreinamento={file?.id}
            data={v}
          />
        ))}
        {data.map((v) => (
          <>
            <ModalConfirma
              key={v.id+1}
              data={v}
              title="Deseja mesmo excluir esse usuário?"
            />
          </>
        ))}
        {data.map((v) => (
          <ModalEdita key={v.id+2} data={v} title="Edição do Usuário: " />
        ))}
      </div>

      <FloatButton />
    </>
  );
}

export default Usuarios;
