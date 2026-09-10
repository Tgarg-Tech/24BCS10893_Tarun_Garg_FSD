import { useContext } from 'react';
import { CurrencyContext } from '../CurrencyContext';

const ProductList = () => {
  const { formatPrice } = useContext(CurrencyContext);

  return (
    <section>
      <h2>Products</h2>
      <p>Wireless Headphones - {formatPrice(100)}</p>
    </section>
  );
};

export default ProductList;
