import { useContext } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';
import FoodieCarousel from './FoodieCarousel';
import ImageSection from './ImageSection';
import { motion } from 'framer-motion';
import { animationTwo } from '../../animations/animationData';

const FoodieMain = () => {
  const { fetchedData } = useContext(FoodieContext);

  const { recipes } = fetchedData;

  return (
    <Container initial='out' animate='in' exit='out' variants={animationTwo}>
      <TextWrapper>
        <h1>
          <span>you</span> are what <span>you</span> eat
        </h1>
        <p>
          Eating healthy is not just about losing weight, it’s about feeling
          better both physically and mentally. Eating healthy is about balance
          and making sure that your body is getting the necessary nutrients it
          needs to function properly. Healthy eating habits require that people
          eat fruits, vegetables, whole grains, fats, proteins, and starches.
        </p>
        <p>
          Keep in mind that healthy eating requires that you’re mindful of what
          you eat and drink, but also how you prepare it. For best results,
          individuals should avoid fried or processed foods, as well as foods
          high in added sugars and salts.
        </p>
      </TextWrapper>
      <SearchInput />
      {recipes.length > 0 ? <FoodieCarousel /> : <ImageSection />}
    </Container>
  );
};

export default FoodieMain;

const Container = styled(motion.main)`
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 4rem 0;
  /* border: 1px solid red; */
`;

const TextWrapper = styled.div`
  /* border: 1px solid red; */
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4rem);
    padding: 1rem;
    user-select: none;

    @media screen and (max-width: 1100px) {
      text-align: center;
    }

    span {
      color: var(--mainPurple);
    }

    span:nth-child(2) {
      color: var(--mainBlue);
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    padding: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
