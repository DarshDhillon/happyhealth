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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quibusdam id qui placeat deleniti iusto dolor voluptatem, autem
          dolores sit quaerat harum veniam et cumque quo eum error asperiores ut
          dicta architecto nobis blanditiis tempore! Reiciendis excepturi nulla
          animi praesentium amet alias, hic veritatis ab error quas, laudantium
          enim magni.
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
  }
`;
