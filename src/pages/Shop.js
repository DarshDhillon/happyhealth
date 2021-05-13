import styled from 'styled-components';
import ProductsMain from '../components/Shop/ProductsMain';
import ShopContextProvider from '../context/Shop/shopProvider';
import ShopBasket from '../components/Shop/ShopBasket';
import ShopBanner from '../images/shop/123.jpg';
import Checkout from '../components/Shop/Checkout';
import CheckoutModal from '../components/Shop/CheckoutModal';

const Shop = () => {
  return (
    <ShopContextProvider>
      <Container>
        <BannerWrapper>
          <ShopBannerImage src={ShopBanner} alt='shop banner' />
        </BannerWrapper>
        <ShopBasket />
        <ProductsMain />
        <Checkout />
      </Container>
      <CheckoutModal />
    </ShopContextProvider>
  );
};

export default Shop;

const Container = styled.div`
  /* border: 1px solid green; */
  /* padding: 0 0 2rem 0; */
  background: linear-gradient(#e8f2f7, #f0e9f3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  height: 300px;
`;

const ShopBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
