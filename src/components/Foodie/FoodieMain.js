import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import FoodieMainImg1 from '../../images/foodie/foodie_main1.svg';
import RecipeCard from './RecipeCard';

const FoodieMain = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <TextWrapper>
        <h1>
          <span>you</span> are what{' '}
          <span onClick={() => setShow((prev) => !prev)}>you</span> eat
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
      <ImageContainer>
        {show ? <RecipeCard /> : <Image src={FoodieMainImg1} />}
      </ImageContainer>
    </Container>
  );
};

export default FoodieMain;

const Container = styled.main`
  /* height: 100vh; */
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

  h1 {
    font-size: clamp(3rem, 5vw, 4rem);
    padding: 1rem;
    user-select: none;

    @media screen and (max-width: 1100px) {
      text-align: center;
    }

    span {
      color: #824998;
    }

    span:nth-child(2) {
      color: #009fe3;
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  padding: 3rem 0;
  margin: 2rem auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid black; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Image = styled.img`
  /* border: 1px solid black; */

  width: 400px;

  @media screen and (max-width: 768px) {
    width: 250px;
    margin-top: 1rem;
  }
`;
