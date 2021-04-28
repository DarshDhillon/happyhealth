import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import FoodieMainImg1 from '../../images/foodie/foodie_main1.svg';
import FoodLoading from '../../images/foodie/frying_loading.gif';
import MatchError from '../../images/foodie/error_no_match.svg';
import RecipeCard from './RecipeCard';
import SearchInput from './SearchInput';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';

const FoodieMain = () => {
  const { fetchedData } = useContext(FoodieContext);

  const { loading, recipes, count } = fetchedData;

  return (
    <Container>
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

      {recipes.length > 0 ? (
        <RecipeImageContainer>
          {recipes.map((recipe) => (
            <RecipeCard key={uuid()} recipe={recipe} />
          ))}
        </RecipeImageContainer>
      ) : (
        <ImageContainer>
          {loading ? (
            <Image src={FoodLoading} />
          ) : count !== null ? (
            <ErrorContainer>
              <h3>Oops! Please try searching again..</h3>
              <Image src={MatchError} />
            </ErrorContainer>
          ) : (
            <Image src={FoodieMainImg1} />
          )}
        </ImageContainer>
      )}
    </Container>
  );
};

export default FoodieMain;

const Container = styled.main`
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
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid black; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const RecipeImageContainer = styled.div`
  padding: 3rem 0;
  margin: 2rem auto;
  width: 60%;
  flex-wrap: wrap;
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

  width: 350px;

  @media screen and (max-width: 768px) {
    width: 250px;
    margin-top: 1rem;
  }
`;

const ErrorContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    text-align: center;
    font-size: 2rem;
    color: #e73636;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
