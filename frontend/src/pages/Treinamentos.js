import React, { useEffect, useState, useCallback } from "react";
import api from "../config/configAPI";

import Card from "../components/Treinamentos/Card.js";
import FloatButton from "../components/Treinamentos/FloatButton.js";

import ModalConfirma from "../components/Treinamentos/ModalConfirma";
import ModalEdita from "../components/Treinamentos/ModalEdita";

function Treinamentos() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [idTreinamento, setIdTreinamento] = useState(0);

  const getFiles = async () => {
    await api
      .get("/list-treinamentos")
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
              title="Deseja mesmo excluir esse treinamento?"
            />
          </>
        ))}
        {data.map((v) => (
          <ModalEdita key={v.id+2} data={v} title="Edição do Treinamento: " />
        ))}
      </div>

      <FloatButton />
    </>
  );
}

export default Treinamentos;
