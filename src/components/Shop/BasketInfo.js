import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';

const BasketInfo = ({ basketItems }) => {
  const { handleAddOneItem, handleRemoveOneItem } = useContext(ShopContext);

  return (
    <Container>
      <BasketHeading>Basket Info.</BasketHeading>
      <Headings>
        <Heading>Product</Heading>
        <Heading>Description</Heading>
        <Heading>Quantity</Heading>
        <Heading>Total</Heading>
      </Headings>
      <TestDiv>
        {basketItems.map((item) => (
          <PurchaseWrapper key={item.id}>
            <PurchaseImage src={item.img} />
            <PurchaseName>{item.productName}</PurchaseName>
            <PurchaseQuantity>
              <span onClick={() => handleAddOneItem(item)}>+</span>{' '}
              {item.quantity}{' '}
              <span onClick={() => handleRemoveOneItem(item)}>-</span>
            </PurchaseQuantity>
            <PurchasePrice>£{item.price * item.quantity}</PurchasePrice>
            {/* <PurchaseDelete>X</PurchaseDelete> */}
          </PurchaseWrapper>
        ))}
      </TestDiv>
    </Container>
  );
};

export default BasketInfo;

const Container = styled.div`
  padding: 2rem;
  width: 40%;
  border: 1px solid black;
  height: 500px;
  user-select: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */

  @media screen and (max-width: 1200px) {
    min-width: 65%;
  }

  @media screen and (max-width: 768px) {
    min-width: 95%;
  }
`;

const BasketHeading = styled.h1`
  margin-bottom: 1rem;
`;

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d9eef7;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
`;

/////// rename this
const TestDiv = styled.div`
  height: 80%;
  /* border: 1px solid red; */
  overflow-y: scroll;

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
`;

const Heading = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  &:hover {
    background-color: #eee1f3;
  }
`;

const PurchaseImage = styled.img`
  width: 80px;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

const PurchaseName = styled.p`
  font-size: 1.2rem;
`;

const PurchaseQuantity = styled.p`
  font-size: 1.5rem;

  span {
    opacity: 0.4;
    cursor: pointer;

    &:hover {
      transform: scale(1.8);
    }
  }
`;

const PurchasePrice = styled.p`
  font-size: 1.2rem;
`;

const PurchaseDelete = styled.button``;
