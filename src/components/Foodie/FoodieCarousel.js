import { useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import RecipeCard from './RecipeCard';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

const FoodieCarousel = () => {
  const { fetchedData } = useContext(FoodieContext);
  const { recipes } = fetchedData;

  return (
    <RecipeImageContainer>
      {recipes.length > 0 && <small>found {recipes.length} recipes:</small>}
      <CarouselStyles>
        <Carousel breakPoints={breakPoints} enableAutoPlay={false}>
          {recipes.map((item) => (
            <RecipeCard key={uuid()} item={item} />
          ))}
        </Carousel>
      </CarouselStyles>
    </RecipeImageContainer>
  );
};

export default FoodieCarousel;

const RecipeImageContainer = styled.div`
  padding: 3rem 0;
  margin: 2rem auto;
  width: 70%;
  /* border: 1px solid black; */
  position: relative;

  small {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-style: italic;
    font-weight: 200;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const CarouselStyles = styled.div`
  .rec.rec-carousel-wrapper .rec-carousel button {
    background: var(--mainBlue);
    color: #fff;
  }

  .rec.rec-carousel-wrapper .rec-carousel button:hover {
    background: #fff;
    color: var(--mainBlue);
  }

  .rec.rec-carousel-wrapper .rec-pagination .rec.rec-dot.rec.rec-dot_active {
    background: var(--mainPurple);
  }
`;
