import * as S from "./ProductCard.style";

const ProductCard = ({ name, description, image, price }) => {
  return (
    <S.ProductCard>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt="imagem do produto" width="200px" height="200px" />
      <p>{price}</p>
    </S.ProductCard>
  );
};

export default ProductCard;
