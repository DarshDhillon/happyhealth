import { useContext } from 'react';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { ShopContext } from '../../context/Shop/shopProvider';
import { MdAddCircleOutline } from 'react-icons/md';
import { MdRemoveCircleOutline } from 'react-icons/md';

const ShopBasket = () => {
  const { handleRemoveOneItem, handleAddOneItem, basketItems } = useContext(
    ShopContext
  );

  return (
    <BasketContainer basketItems={basketItems}>
      <CartIcon />
      <BasketQuantity>{basketItems.length}</BasketQuantity>
      <HoverBasket>
        <BagTitle>SHOPPING BASKET</BagTitle>
        {basketItems.map((item) => (
          <ItemsWrapper key={item.id}>
            <ItemThumbnail src={item.img} alt={item.alt} />
            <ItemProductName>{item.productName}</ItemProductName>
            <ItemProductQuantity>{item.quantity}</ItemProductQuantity>

            <div>
              <BasketButtonAdd onClick={() => handleAddOneItem(item)}>
                +
              </BasketButtonAdd>
              <BasketButtonRemove onClick={() => handleRemoveOneItem(item)}>
                -
              </BasketButtonRemove>
            </div>
            <ItemProductTotal>${item.price * item.quantity}</ItemProductTotal>
          </ItemsWrapper>
        ))}
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
  font-size: 2rem;
  position: absolute;
  top: 35%;
  left: 45%;
  /* z-index: 51; */
  color: #fff;
  /* transform: translateX(-50%), translateY(-50%); */
`;

const HoverBasket = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid black; */
  z-index: 50;
  background-color: var(--mainBlue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 400px;
    /* min-height: 400px; */
    border-radius: 1rem;
    transition: 0.4s ease-in-out;
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
`;

const ItemsWrapper = styled.div`
  /* height: 100%; */
  margin: 0.8rem auto;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BagTitle = styled.h3`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const ItemThumbnail = styled.img`
  width: 50px;
`;

const ItemProductName = styled.p`
  font-size: 1.1rem;
`;

const ItemProductQuantity = styled.p`
  font-size: 1.4rem;
`;

const ItemProductTotal = styled.p`
  font-size: 1.4rem;
`;

const BasketButtonRemove = styled(MdRemoveCircleOutline)`
  font-size: 1.8rem;
`;

const BasketButtonAdd = styled(MdAddCircleOutline)`
  font-size: 1.8rem;
`;
