import { useState } from 'react';
import styled from 'styled-components';
import NoImage from '../../images/foodie/no_image_available.png';

const Recipecard = ({ recipe }) => {
  const [flip, setFlip] = useState(false);

  return (
    <Card flip={flip} onClick={() => setFlip(!flip)}>
      <Front>
        <img
          src={recipe.recipe.image ? recipe.recipe.image : NoImage}
          alt={recipe.recipe.label}
        />
        <p>{recipe.recipe.label}</p>
        <RecipeCardOptions>
          <p>{recipe.recipe.cuisineType}</p>
          <p>{recipe.recipe.calories}</p>
        </RecipeCardOptions>
      </Front>

      <Back>
        <p>{recipe.recipe.cautions}</p>
        <p>{recipe.recipe.mealType}</p>
      </Back>
    </Card>
  );
};

export default Recipecard;

const Card = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  height: 300px;
  width: 200px;
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

  p {
    color: black;
  }
`;

const Front = styled.div`
  position: absolute;
  /* padding: 1rem; */
  backface-visibility: hidden;

  img {
    width: 150px;
    border-radius: 0.5rem;
  }
`;

const Back = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  /* padding: 1rem; */
  backface-visibility: hidden;
`;

const RecipeCardOptions = styled.div`
  margin-top: 0.5rem;
`;
