import * as S from "./ProductList.style";
import ProductCard from "../ProductCard";

const ProductList = ({ produtos }) => {
  return (
    <S.ProductList>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <ProductCard
            id={produto.id}
            name={produto.nome}
            description={produto.descricao}
            price={produto.preco}
            image={produto.imagem}
          />
        </li>
      ))}
    </S.ProductList>
  );
};

export default ProductList;
