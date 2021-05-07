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
            <h2 style={{ color: '#fff' }}>{item.productName}</h2>
            <h1 style={{ color: 'red' }}>{item.quantity}</h1>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </div>
        ))}
      </ItemsWrapper>
    </BasketHoverContainer>
  );
};

export default BasketHover;

const BasketHoverContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  /* width: 100%; */
  padding: 1rem;
  display: none;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;
