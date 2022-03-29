import { useNavigate } from "react-router";
import * as S from "./Header.style";

const Header = ({ busca, setBusca }) => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Title onClick={() => navigate("/")}>OSF Shop</S.Title>
      <S.Search
        placeholder="Busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <p onClick={() => navigate("/carrinho")}>Carrinho</p>
    </S.Header>
  );
};

export default Header;
