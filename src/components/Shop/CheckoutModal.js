import { useContext } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { ShopContext } from '../../context/Shop/shopProvider';

const CHECKOUT_ROOT = document.getElementById('checkout-modal-root');

const CheckoutModal = () => {
  const { showCheckoutModal, checkoutOrderNumber, transactionInfo } =
    useContext(ShopContext);

  if (!showCheckoutModal) return null;

  console.log(transactionInfo);

  return ReactDOM.createPortal(
    <ModalContainer>
      <h1>{checkoutOrderNumber}</h1>
      <h1>{transactionInfo.postcode}</h1>
      <h1>{transactionInfo.nameOnCard}</h1>
    </ModalContainer>,
    CHECKOUT_ROOT
  );
};

export default CheckoutModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);

  h1 {
    color: #fff;
  }
`;
