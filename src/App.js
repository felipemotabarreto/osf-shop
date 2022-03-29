import Header from "./components/Header";
import { useEffect, useState } from "react";

import produtosData from "./mocks/produtos.json";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  const [produtos, setProdutos] = useState(produtosData);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setProdutos(
      produtosData.filter((produto) => {
        return produto.nome.includes(busca);
      })
    );
  }, [busca]);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header busca={busca} setBusca={setBusca} />
        <Routes>
          <Route index element={<ProductList produtos={produtos} />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
