import { useCartContext } from "../../contexts/CartContextProvider";
import * as S from "./ProductCard.style";

const ProductCard = ({ id, name, description, image, price }) => {
  const { addProduct } = useCartContext();

  return (
    <S.ProductCard>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt="imagem do produto" width="200px" height="200px" />
      <p>{price}</p>
      <button
        onClick={() =>
          addProduct({
            id,
            nome: name,
            descricao: description,
            imagem: image,
            preco: price,
          })
        }
      >
        Comprar
      </button>
    </S.ProductCard>
  );
};

export default ProductCard;
