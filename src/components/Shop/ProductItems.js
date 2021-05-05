import styled from 'styled-components';
import shopProducts from '../../data/Shop/shopProducts';

const ProductItems = () => {
  return (
    <>
      {shopProducts.map((item) => (
        <ProductWrapper key={item.id}>
          <ProductTitle>{item.productName}</ProductTitle>
          <ProductDescription>{item.productDescription}</ProductDescription>
          <ProductImage src={item.img} alt={item.alt} />
          <BuyButton>BUY £{item.price}</BuyButton>
        </ProductWrapper>
      ))}
    </>
  );
};

export default ProductItems;

const ProductWrapper = styled.div`
  border: 1px solid red;
  height: 400px;
  width: 250px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  color: #000;
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
`;

const ProductImage = styled.img`
  width: 180px;
`;

const BuyButton = styled.button`
  font-weight: bold;
  width: 60%;
  padding: 0.5rem;
  /* border-radius: 0.2rem; */
  /* outline: none; */
  border: none;
  background-color: #a7e7a7;
  cursor: pointer;
`;
