import { useContext, useState } from 'react';
import styled from 'styled-components';
import CreditCardLogos from '../../images/shop/credit_cards.svg';
import {
  cardDayOptions,
  cardMonthOptions,
} from '../../data/Shop/cardSelectOptions';
import { ShopContext } from '../../context/Shop/shopProvider';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

const PaymentSection = () => {
  const { handleShowCheckoutModal, handleSubmitTransaction, basketItems } =
    useContext(ShopContext);

  const [transactionInfo, setTransactionInfo] = useState({
    nameOnCard: '',
    postcode: '',
  });

  const [showCardNumber, setShowCardNumber] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (basketItems.length === 0)
      return alert('Please add a basket item first!');
    handleSubmitTransaction(transactionInfo);
    handleShowCheckoutModal((prev) => !prev);
  };

  return (
    <Main>
      <Heading>Payment Info.</Heading>
      <PaymentForm onSubmit={handleFormSubmit}>
        <PersonalInfo>
          <PersonalInfoWrapper>
            <Label>Name on card: </Label>
            <Input
              onChange={(e) =>
                setTransactionInfo((prev) => {
                  return {
                    ...prev,
                    nameOnCard: e.target.value,
                  };
                })
              }
              value={transactionInfo.nameOnCard}
              style={{
                border: 'none',
                background: '#eddff3',
                textTransform: 'capitalize',
              }}
              type='text'
              autoComplete='cc-csc'
              required
            />
          </PersonalInfoWrapper>
          <div>
            <Label>Address: </Label>
            <TextArea
              style={{ border: 'none', background: '#eddff3' }}
              cols='20'
              rows='3'
              autoComplete='none'
            ></TextArea>
          </div>
          <div>
            <Label>Postcode: </Label>
            <Input
              onChange={(e) =>
                setTransactionInfo((prev) => {
                  return {
                    ...prev,
                    postcode: e.target.value,
                  };
                })
              }
              style={{
                border: 'none',
                background: '#eddff3',
                width: '100px',
                textTransform: 'uppercase',
              }}
              type='text'
              autoComplete='cc-csc'
              required
            />
          </div>
          <div>
            <Label>eMail: </Label>
            <Input
              style={{ border: 'none', background: '#eddff3' }}
              type='email'
              autoComplete='cc-csc'
            />
          </div>
        </PersonalInfo>
        <PaymentInfo>
          <CardNumberWrapper>
            <Label>Card number: </Label>
            <Input
              type={showCardNumber ? 'text' : 'password'}
              autoComplete='cc-csc'
              maxLength='16'
              style={{
                width: '200px',
                border: 'none',
                background: '#eddff3',
              }}
            />{' '}
            <span onClick={() => setShowCardNumber((prev) => !prev)}>
              {showCardNumber ? <BsEyeSlash /> : <BsEye />}
            </span>
            <Label>CVV:</Label>
            <Input
              style={{ width: '50px', border: 'none', background: '#eddff3' }}
              type='password'
              maxLength='3'
            />
          </CardNumberWrapper>
          <TestDiv3>
            <Label>Expiration date: </Label>
            <Select style={{ border: 'none', background: '#eddff3' }}>
              {cardDayOptions.map((day, index) => (
                <Option key={index}>{Number(day)}</Option>
              ))}
            </Select>
            <Select style={{ border: 'none', background: '#eddff3' }}>
              {cardMonthOptions.map((month, index) => (
                <Option key={index}>{month}</Option>
              ))}
            </Select>
            <Select style={{ border: 'none', background: '#eddff3' }}>
              <Option>2021</Option>
              <Option>2022</Option>
              <Option>2023</Option>
            </Select>
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
    width: 100%;
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const PaymentLogos = styled.img`
  width: 100px;
  align-self: center;
`;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const PersonalInfo = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  /* padding: 2rem; */
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin-left: 0.8rem;
    /* line-height: 1.5rem; */
    font-size: 1.2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 0 auto; */
  }

  textarea {
    margin-left: 0.8rem;
    resize: none;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const PersonalInfoWrapper = styled.div``;

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

const CardNumberWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  position: relative;

  span {
    position: absolute;
    right: 25px;
    top: 25%;
    font-size: 1.5rem;
    user-select: none;
    color: var(--mainBlue);
    cursor: pointer;
  }

  input {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    input {
      font-size: 1rem;
    }
  }
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
