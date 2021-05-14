import styled from 'styled-components';
import ProductsMain from '../components/Shop/ProductsMain';
import ShopContextProvider from '../context/Shop/shopProvider';
import ShopBasket from '../components/Shop/ShopBasket';
import Checkout from '../components/Shop/Checkout';
import CheckoutModal from '../components/Shop/CheckoutModal';
import ShopBanner from '../components/Shop/ShopBanner';
import { motion } from 'framer-motion';
import { animationFour } from '../animations/animationData';

const Shop = () => {
  return (
    <ShopContextProvider>
      <Container
        initial='out'
        animate='end'
        exit='out'
        variants={animationFour}
      >
        <ShopBanner />
        <ShopBasket />
        <ProductsMain />
        <Checkout />
      </Container>
      <CheckoutModal />
    </ShopContextProvider>
  );
};

export default Shop;

const Container = styled(motion.div)`
  /* border: 1px solid green; */
  /* padding: 0 0 2rem 0; */
  background: linear-gradient(#e8f2f7, #f0e9f3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
