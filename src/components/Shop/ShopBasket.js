import { useContext } from 'react';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { ShopContext } from '../../context/Shop/shopProvider';
import { MdAddCircleOutline } from 'react-icons/md';
import { MdRemoveCircleOutline } from 'react-icons/md';
import useBasketSaleTotal from '../../hooks/useBasketSaleTotal';

const ShopBasket = () => {
  const {
    showCheckout,
    handleShowCheckout,
    handleRemoveOneItem,
    handleAddOneItem,
    basketItems,
  } = useContext(ShopContext);

  const [totalSaleAmount] = useBasketSaleTotal(basketItems);

  if (showCheckout) return null;

  return (
    <BasketContainer basketItems={basketItems}>
      <CartIcon />
      <BasketQuantity>{basketItems.length}</BasketQuantity>
      <HoverBasket>
        <BasketTitle>SHOPPING BASKET</BasketTitle>
        {basketItems.map((item) => (
          <ItemsWrapper key={item.id}>
            <ItemThumbnail src={item.img} alt={item.alt} />
            <ItemProductName>
              {item.productName.substr(0, 15)}...
            </ItemProductName>
            <ItemProductQuantity>{item.quantity}</ItemProductQuantity>
            <ButtonWrapper>
              <BasketButtonAdd onClick={() => handleAddOneItem(item)}>
                +
              </BasketButtonAdd>
              <BasketButtonRemove onClick={() => handleRemoveOneItem(item)}>
                -
              </BasketButtonRemove>
            </ButtonWrapper>
            <ItemProductTotal>£{item.price * item.quantity}</ItemProductTotal>
          </ItemsWrapper>
        ))}
        <BasketFooter>
          <BasketTotalAmount>
            BASKET TOTAL: <span>£{totalSaleAmount}</span>
          </BasketTotalAmount>
          <CheckoutButton onClick={() => handleShowCheckout((prev) => !prev)}>
            CHECKOUT
          </CheckoutButton>
        </BasketFooter>
      </HoverBasket>
    </BasketContainer>
  );
};

export default ShopBasket;

const CartIcon = styled(RiShoppingCartLine)`
  height: 80%;
  width: 80%;
  position: relative;
  color: var(--mainPurple);
`;

const BasketQuantity = styled.p`
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  top: 35%;
  left: 45%;
  color: #fff;
`;

const HoverBasket = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: none;
`;

const BasketContainer = styled.div`
  opacity: ${({ basketItems }) => (basketItems.length > 0 ? '1' : '0')};
  visibility: ${({ basketItems }) =>
    basketItems.length > 0 ? 'visible' : 'hidden'};
  min-height: 150px;
  width: 150px;
  position: fixed;
  top: 100px;
  right: 50px;
  border-radius: 50%;
  z-index: 50;
  background-color: var(--mainBlue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    width: 450px;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
  }

  &:hover ${CartIcon} {
    display: none;
  }

  &:hover ${BasketQuantity} {
    display: none;
  }

  &:hover ${HoverBasket} {
    display: block;
  }

  @media screen and (max-width: 500px) {
    &:hover {
      right: 0;
      width: 100vw;
    }
  }
`;

const ItemsWrapper = styled.div`
  margin: 0.8rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BasketTitle = styled.h3`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 1.6rem;
`;

const ItemThumbnail = styled.img`
  width: 50px;
`;

const ItemProductName = styled.p`
  font-size: 1.1rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div``;

const ItemProductQuantity = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

const ItemProductTotal = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

const BasketButtonRemove = styled(MdRemoveCircleOutline)`
  font-size: 1.8rem;
  color: #e94747;
  z-index: 999;
`;

const BasketButtonAdd = styled(MdAddCircleOutline)`
  font-size: 1.8rem;
  color: #8eff8e;
  z-index: 999;
`;

const BasketTotalAmount = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  span {
    color: #fff;
  }
`;

const CheckoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--mainPurple);
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--mainPurple);
    background-color: #fff;
  }
`;

const BasketFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
