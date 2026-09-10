import { useContext } from 'react';
import { CurrencyContext } from '../CurrencyContext';

const CheckoutCart = () => {
  const { formatPrice } = useContext(CurrencyContext);

  return (
    <section>
      <h2>Checkout</h2>
      <p>Subtotal: {formatPrice(150)}</p>
    </section>
  );
};

export default CheckoutCart;
