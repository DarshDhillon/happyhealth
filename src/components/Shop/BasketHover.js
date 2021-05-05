import { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../context/Shop/shopProvider';

const BasketHover = () => {
  const { handleDelete, basketItems } = useContext(ShopContext);

  return (
    <BasketHoverContainer>
      <ItemsWrapper>
        {basketItems.map((item) => (
          <div key={item.id}>
            <p>{item.productName}</p>
            <button>Delete</button>
          </div>
        ))}
      </ItemsWrapper>
    </BasketHoverContainer>
  );
};

export default BasketHover;

const BasketHoverContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: none;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;
