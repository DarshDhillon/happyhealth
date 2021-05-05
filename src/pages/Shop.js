import styled from 'styled-components';
import ProductsMain from '../components/Shop/ProductsMain';
import ShopContextProvider from '../context/Shop/shopProvider';
import ShopBasket from '../components/Shop/ShopBasket';

const Shop = () => {
  return (
    <ShopContextProvider>
      <Container>
        <ShopBasket />
        <ProductsMain />
      </Container>
    </ShopContextProvider>
  );
};

export default Shop;

const Container = styled.div`
  border: 1px solid green;
  background: linear-gradient(#e8f2f7, #f0e9f3);
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  padding: 3rem 1rem;
  position: relative;
`;
