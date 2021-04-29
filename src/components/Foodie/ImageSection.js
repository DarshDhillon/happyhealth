import { useContext } from 'react';
import styled from 'styled-components';
import FoodieMainImg1 from '../../images/foodie/foodie_main1.svg';
import FoodLoading from '../../images/foodie/frying_loading.gif';
import MatchError from '../../images/foodie/error_no_match.svg';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';

const ImageSection = () => {
  const { fetchedData } = useContext(FoodieContext);

  const { loading, count } = fetchedData;

  return (
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
  );
};

export default ImageSection;

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
    font-style: italic;
  }
`;
