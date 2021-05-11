import { useContext, useState } from 'react';
import styled from 'styled-components';
import CreditCardLogos from '../../images/shop/credit_cards.svg';
import {
  cardDayOptions,
  cardMonthOptions,
} from '../../data/Shop/cardSelectOptions';
import { ShopContext } from '../../context/Shop/shopProvider';

const PaymentSection = () => {
  const { handleShowCheckoutModal, handleSubmitTransaction } =
    useContext(ShopContext);

  const [transactionInfo, setTransactionInfo] = useState({
    nameOnCard: '',
    postcode: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmitTransaction(transactionInfo);
    handleShowCheckoutModal((prev) => !prev);
  };

  console.log(transactionInfo);

  return (
    <Main>
      <Heading>Payment Info.</Heading>
      <PaymentForm onSubmit={handleFormSubmit}>
        <PersonalInfo>
          <div>
            <label>Name on card: </label>
            <input
              onChange={(e) =>
                setTransactionInfo((prev) => {
                  return {
                    ...prev,
                    nameOnCard: e.target.value,
                  };
                })
              }
              value={transactionInfo.nameOnCard}
              style={{ border: 'none', background: '#eddff3' }}
              type='text'
              autoComplete='cc-csc'
            />
          </div>
          <div>
            <label>Address: </label>
            <textarea
              style={{ border: 'none', background: '#eddff3' }}
              cols='25'
              rows='3'
              autoComplete='none'
            ></textarea>
          </div>
          <div>
            <label>Postcode: </label>
            <input
              onChange={(e) =>
                setTransactionInfo((prev) => {
                  return {
                    ...prev,
                    postcode: e.target.value,
                  };
                })
              }
              style={{ border: 'none', background: '#eddff3' }}
              type='text'
              autoComplete='cc-csc'
            />
          </div>
          <div>
            <label>Contact number: </label>
            <input
              style={{ border: 'none', background: '#eddff3' }}
              type='text'
              autoComplete='cc-csc'
            />
          </div>
        </PersonalInfo>
        <PaymentInfo>
          <TestDiv2>
            <label>Card number: </label>
            <input
              type='text'
              autoComplete='cc-csc'
              maxLength='16'
              style={{
                width: '200px',
                border: 'none',
                background: '#eddff3',
              }}
            />
            <label>CVV:</label>
            <input
              style={{ width: '50px', border: 'none', background: '#eddff3' }}
              type='password'
              maxLength='3'
            />
          </TestDiv2>
          <TestDiv3>
            <label>Expiration date: </label>
            <select style={{ border: 'none', background: '#eddff3' }}>
              {cardDayOptions.map((day, index) => (
                <option key={index}>{Number(day)}</option>
              ))}
            </select>
            <select style={{ border: 'none', background: '#eddff3' }}>
              {cardMonthOptions.map((month, index) => (
                <option key={index}>{month}</option>
              ))}
            </select>
            <select style={{ border: 'none', background: '#eddff3' }}>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </TestDiv3>
        </PaymentInfo>
        <BuyButton>BUY NOW</BuyButton>
      </PaymentForm>
      <PaymentLogos src={CreditCardLogos} alt='card logos' />
    </Main>
  );
};

export default PaymentSection;

const Main = styled.div`
  /* border: 1px solid red; */
  height: 700px;
  width: 40%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: 2rem 0;
  background-color: #f8f8ff;
  border-radius: 0 1rem 1rem 0;

  * {
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    min-width: 65%;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media screen and (max-width: 768px) {
    /* height: 800px; */
    min-width: 90%;
  }
`;

const PaymentForm = styled.form`
  /* border: 1px solid black; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
`;

const PaymentLogos = styled.img`
  width: 100px;
  align-self: center;
`;

const PersonalInfo = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  /* padding: 2rem; */
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin-left: 0.8rem;
  }

  div {
    align-items: center;
    display: flex;
    margin: 0 auto;
  }

  textarea {
    margin-left: 0.8rem;
    resize: none;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const PaymentInfo = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TestDiv2 = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;

const TestDiv3 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  label {
    margin-right: 1rem;
  }

  select {
    &::-webkit-scrollbar-track {
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1); */
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--mainPurple);
    }
  }

  * {
    cursor: pointer;
  }
`;

const BuyButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: var(--mainPurple);
  color: #fff;
  /* border-radius: 0.5rem; */
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: var(--mainPurple);
    background-color: #fff;
    border-radius: 0.5rem;
    outline: 1px solid var(--mainPurple);
    transition: all 0.4s ease-in-out;
  }
`;
