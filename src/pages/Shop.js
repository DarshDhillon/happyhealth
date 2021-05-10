import styled from 'styled-components';
import ProductsMain from '../components/Shop/ProductsMain';
import ShopContextProvider from '../context/Shop/shopProvider';
import ShopBasket from '../components/Shop/ShopBasket';
// import ShopBanner from '../images/shop/shop_banner2.jpg';
import ShopBanner from '../images/shop/123.jpg';

import Checkout from '../components/Shop/Checkout';

const Shop = () => {
  return (
    <ShopContextProvider>
      <Container>
        <BannerWrapper>
          <ShopBannerImage src={ShopBanner} alt='shop banner' />
        </BannerWrapper>
        <ShopBasket />
        <ProductsMain />
      </Container>
      <Checkout />
    </ShopContextProvider>
  );
};

export default Shop;

const Container = styled.div`
  padding: 0 0 2rem 0;
  /* border: 1px solid green; */
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
