import { useCartContext } from "../../contexts/CartContextProvider";
import ProductList from "../ProductList/ProductList";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);

  return <ProductList produtos={cart} />;
};

export default Cart;
