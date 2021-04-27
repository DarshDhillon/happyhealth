import { useState } from 'react';
import styled from 'styled-components';

const Recipecard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <Card flip={flip} onClick={() => setFlip(!flip)}>
      <Front>
        <p>Placeholder text</p>
        <RecipeCardOptions>
          <p>Placeholder text</p>
          <p>Placeholder text</p>
        </RecipeCardOptions>
      </Front>

      <Back>
        <p>Placeholder text</p>
      </Back>
    </Card>
  );
};

export default Recipecard;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 250px;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  transform-style: preserve-3d;
  transition: 300ms;

  transform: perspective(1000px)
    rotateY(${({ flip }) => (flip ? '180deg' : '0')}) translateY(0);

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);
  }
`;

const Front = styled.div`
  left: 0;
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
`;

const Back = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
`;

const RecipeCardOptions = styled.div`
  margin-top: 0.5rem;
`;
