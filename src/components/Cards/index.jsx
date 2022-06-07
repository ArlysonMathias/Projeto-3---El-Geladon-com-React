import React from "react";
import "./style.css";
import toast from "react-hot-toast";

const Cards = ({ palette }) => {
  const errorMessage = () => {
    toast.error("Sessão em densenvolvimento.");
  };

  return (
    <div className="card-container">
      <div>
        <p>{`R$ ${palette.preco.toFixed(2)}`}</p>
        <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
      </div>
      <h3>{palette.sabor}</h3>
      <p>{palette.descricao}</p>
      <button onClick={errorMessage}>adicionar </button>
    </div>
  );
};

export default Cards;
