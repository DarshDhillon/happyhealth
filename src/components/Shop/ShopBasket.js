import { useContext } from 'react';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { ShopContext } from '../../context/Shop/shopProvider';
import BasketHover from './BasketHover';

const ShopBasket = () => {
  const { basketItems } = useContext(ShopContext);

  if (basketItems.length === 0) return null;

  return (
    <BasketContainer>
      <CartIcon />
      <BasketQuantity>{basketItems.length}</BasketQuantity>
      <BasketHover />
    </BasketContainer>
  );
};

export default ShopBasket;

const BasketContainer = styled.div`
  height: 150px;
  width: 150px;
  position: fixed;
  top: 100px;
  right: 50px;
  border-radius: 50%;
  /* border: 1px solid black; */
  z-index: 50;
  background-color: var(--mainBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 250px;
    height: 450px;
    border-radius: 1rem;
    transition: 0.4s ease-in-out;
  }

  &:hover :nth-child(1) + :nth-child(2) {
    display: none;
  }

  &:hover :nth-child(3) {
    display: block;
  }
`;

const CartIcon = styled(RiShoppingCartLine)`
  height: 80%;
  width: 80%;
  position: relative;
`;

const BasketQuantity = styled.p`
  font-size: 2rem;
  position: absolute;
  top: 35%;
  left: 45%;
  /* z-index: 51; */
  color: #fff;
  /* transform: translateX(-50%), translateY(-50%); */
`;
