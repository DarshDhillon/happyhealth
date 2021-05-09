import styled from 'styled-components';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcAmex } from 'react-icons/fa';
import CreditCardLogos from '../../images/shop/credit_cards.svg';

const PaymentSection = () => {
  return (
    <Main>
      <Heading>Payment Info.</Heading>
      <PersonalInfo>
        <label>Name on card:</label>
        <input type='text' />
        <label>Address:</label>
        <textarea name='' id='' cols='30' rows='10'></textarea>
      </PersonalInfo>
      <PaymentInfo>
        <label>Card number:</label>
        <input type='text' />
        <label>Expiration date:</label>
        <input type='tel' />
      </PaymentInfo>
      <PaymentLogos src={CreditCardLogos} alt='card logos' />
    </Main>
  );
};

export default PaymentSection;

const Main = styled.div`
  height: 500px;
  border: 1px solid red;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`;

const Heading = styled.h1``;

const PaymentLogos = styled.img`
  width: 150px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PaymentInfo = styled.div``;
