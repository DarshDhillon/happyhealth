import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';
import BasketCheckout from './BasketCheckout';
import PaymentSection from './PaymentSection';

const Checkout = () => {
  const { showCheckout, basketItems } = useContext(ShopContext);

  if (!showCheckout) return null;

  return (
    <CheckoutSection>
      <BasketCheckout basketItems={basketItems} />
      <PaymentSection basketItems={basketItems} />
    </CheckoutSection>
  );
};

export default Checkout;

const CheckoutSection = styled.div`
  background: linear-gradient(#f0e9f3, #e8f2f7);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
