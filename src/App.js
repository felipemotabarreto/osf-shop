import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import BagImage from "./assets/images/mochila.jpg";

function App() {
  return (
    <>
      <Header />
      <ProductCard
        name="Produto teste"
        description="Descrição do produto teste"
        price="R$ 10,00"
        image={BagImage}
      />
    </>
  );
}

export default App;
