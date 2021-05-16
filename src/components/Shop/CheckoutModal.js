import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { ShopContext } from '../../context/Shop/shopProvider';
import CheckoutGif from '../../images/shop/checkout_gif.gif';
import TransactionComplete from './TransactionComplete';

const CHECKOUT_ROOT = document.getElementById('checkout-modal-root');

const CheckoutModal = () => {
  const { showCheckoutModal, checkoutOrderNumber, transactionInfo } =
    useContext(ShopContext);

  const [showAnimation, setShowAnimaion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimaion((prev) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showCheckoutModal]);

  if (!showCheckoutModal) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalWrapper>
        {showAnimation ? (
          <Animation alt='checkout gif' src={CheckoutGif} />
        ) : (
          <TransactionComplete
            checkoutOrderNumber={checkoutOrderNumber}
            transactionInfo={transactionInfo}
          />
        )}
      </ModalWrapper>
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
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  /* border: 1px solid red; */
  height: 70%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 90%;

    width: 80%;
  }
`;

const Animation = styled.img`
  width: 700px;
  border-radius: 0.5rem;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
