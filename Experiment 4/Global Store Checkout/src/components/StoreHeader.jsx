import { useContext } from 'react';
import { CurrencyContext } from '../CurrencyContext';

const StoreHeader = () => {
  const { changeCurrency } = useContext(CurrencyContext);

  return (
    <header>
      <h1>Global Store</h1>
      <div>
        <button onClick={() => changeCurrency('USD')}>USD</button>
        <button onClick={() => changeCurrency('EUR')}>EUR</button>
        <button onClick={() => changeCurrency('GBP')}>GBP</button>
        <button onClick={() => changeCurrency('JPY')}>JPY</button>
      </div>
    </header>
  );
};

export default StoreHeader;
