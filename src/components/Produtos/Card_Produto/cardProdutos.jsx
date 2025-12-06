import "./cardprodutos.css";
import imgPadrao from "../../image/16.png";

const CardProdutos = ({ titulo, preco, imagem = imgPadrao }) => {
  return (
    <article className="card-produto">
      <img src={imagem} alt={titulo} loading="lazy" />
      <div className="card-corpo">
        <h3>{titulo}</h3>
        <span>{preco}</span>
        <button className="btn-comprar" type="button">
          COMPRAR
        </button>
      </div>
    </article>
  );
};

export default CardProdutos;
