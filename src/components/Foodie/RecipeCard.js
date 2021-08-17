import { useState } from 'react';
import styled from 'styled-components';
import FlipImg from '../../images/foodie/flip.png';
import { v4 as uuid } from 'uuid';

const Recipecard = ({ item }) => {
  const [flip, setFlip] = useState(false);

  return (
    <Card flip={flip} onClick={() => setFlip(!flip)}>
      <img src={FlipImg} alt='flip' />
      <Front>
        <Title>{item.recipe.label}</Title>
        <Image src={item.recipe.image} alt={item.recipe.label} />
        <SubText>
          {item.recipe.cuisineType && <p>Cuisine: {item.recipe.cuisineType}</p>}
          <p>Calories: {Math.ceil(item.recipe.calories)}</p>
        </SubText>
      </Front>

      <Back>
        <IngredientsContainer>
          <h4>INGREDIENTS:</h4>
          {item.recipe.ingredientLines.map((ingredient) => (
            <p key={uuid()}>{ingredient}</p>
          ))}
        </IngredientsContainer>
      </Back>
    </Card>
  );
};

export default Recipecard;

const Card = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  height: 400px;
  width: 250px;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background-color: #fffefe;
  transform-style: preserve-3d;
  transition: 300ms;
  cursor: pointer;
  text-align: center;

  transform: perspective(1000px)
    rotateY(${({ flip }) => (flip ? '180deg' : '0')}) translateY(0);

  img:nth-child(1) {
    width: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
    visibility: hidden;
    backface-visibility: hidden;
  }

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);

    img:nth-child(1) {
      visibility: visible;
    }
  }
`;

const Front = styled.div`
  transform: rotateY(0deg);
  display: flex;
  padding: 0.1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  backface-visibility: hidden;
  height: 90%;
  width: 100%;
`;

const Back = styled.div`
  height: 100%;
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: var(--mainPurple);

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Image = styled.img`
  width: 200px;
  border-radius: 0.5rem;
`;

const SubText = styled.div`
  text-transform: capitalize;
  font-size: 1.2rem;
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 95%;
  width: 100%;
  padding: 0 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--mainPurple);
  }

  scrollbar-color: var(--mainPurple) transparent;
  scrollbar-width: thin;

  h4 {
    color: var(--mainPurple);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
