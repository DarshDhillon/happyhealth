import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';

const Checkout = () => {
  const { basketItems } = useContext(ShopContext);

  return (
    <div>
      <h1>hello from store</h1>
      {console.log(basketItems)}
    </div>
  );
};

export default Checkout;
