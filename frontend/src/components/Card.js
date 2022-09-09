import React, { useState}from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import ModalConfirma from "./Treinamentos/ModalConfirma.js";

function Card(props) {
  const [nameModal, setNameModal] = useState('#modalConfirma');
  const result = (id) => {
    return "#modalConfirma"+id;
  }

  return (
    <>
    
      <div className="card">
        <div className="box">
          <div className="content">
          {result}
            <a href={result(props.data.id)} id="icons-delete">
              <BsTrashFill size={30} />
            </a>
            <a href={"#modalEdita"+props.data.id} id="icons-edit">
              <AiFillEdit size={30} />
            </a>
            {/* <h2>{props.data.id}</h2> */}
            <h3>
              {props.data.nametreinamento}
            </h3>
            &nbsp;
            <BsFillFileEarmarkPdfFill size="40" color="white" />
            <p></p>
            <a href={props.link} target="_blank" id="buttonAccess">
              {props.buttonName}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
