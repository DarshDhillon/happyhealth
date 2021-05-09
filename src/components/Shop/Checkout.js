import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';

const Checkout = () => {
  const { showCheckout, basketItems } = useContext(ShopContext);

  if (!showCheckout) return null;

  console.log(basketItems);

  return (
    <MainDiv>
      {basketItems.map((item) => (
        <div key={item.id}>
          <p>{item.productName}</p>
        </div>
      ))}
    </MainDiv>
  );
};

export default Checkout;

const MainDiv = styled.div`
  background-color: pink;
  height: 400px;
`;
