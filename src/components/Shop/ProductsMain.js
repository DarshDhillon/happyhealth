import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';

const ProductsMain = () => {
  const { handleAddOneItem, shopProducts } = useContext(ShopContext);

  return (
    <>
      <ProductsContainer>
        {shopProducts.map((item) => (
          <ProductWrapper key={item.id}>
            <ProductTitle>{item.productName}</ProductTitle>
            <ProductDescription>{item.productDescription}</ProductDescription>
            <ProductImage src={item.img} alt={item.alt} />
            <BuyButton onClick={() => handleAddOneItem(item)}>
              BUY £{item.price}
            </BuyButton>
          </ProductWrapper>
        ))}
      </ProductsContainer>
    </>
  );
};

export default ProductsMain;

const ProductsContainer = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  padding: 1rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: auto; */
  /* grid-template-columns: 400px 400px 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* overflow: hidden; */
`;

const ProductWrapper = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 2rem;
  height: 400px;
  width: 250px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e3e3;
  text-align: center;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
`;

const ProductTitle = styled.h3`
  color: var(--mainBlue);
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
`;

const ProductImage = styled.img`
  width: 180px;
  transition: all 0.3s ease-in-out;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.8);
    transition: all 0.3s ease-in-out;
  }
`;

const BuyButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  width: 60%;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  /* outline: none; */
  border: 1px solid #824998;
  background-color: #e1cee9;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightgreen;
    transition: all 0.3s ease-in-out;
  }
`;
