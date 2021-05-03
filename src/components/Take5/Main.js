import { useContext } from 'react';
import styled from 'styled-components';
import BeachImage from '../../images/take5/meditate_beach.svg';
import RainImage from '../../images/take5/meditate_raining.svg';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';

const Main = () => {
  const { handleImageClick } = useContext(ModalVideoContext);

  return (
    <Container>
      <TextWrapper>
        <h1>
          better <span>mind</span>. better <span>you</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quibusdam id qui placeat deleniti iusto dolor voluptatem, autem
          dolores sit quaerat harum veniam et cumque quo eum error asperiores ut
          dicta architecto nobis blanditiis tempore! Reiciendis excepturi nulla
          animi praesentium amet alias, hic veritatis ab error quas, laudantium
          enim magni.
        </p>
        <h3>Take5 and relax...</h3>
      </TextWrapper>
      <ImageContainer>
        <Image
          name='beach'
          onClick={handleImageClick}
          src={BeachImage}
          alt='beach'
        />
        <Image
          name='rain'
          onClick={handleImageClick}
          src={RainImage}
          alt='rain'
        />
      </ImageContainer>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  /* height: 100vh; */
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 4rem 0;
  /* border: 1px solid red; */
`;

const TextWrapper = styled.div`
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

    @media screen and (max-width: 1100px) {
      text-align: center;
    }

    span {
      color: var(--mainBlue);
    }

    span:nth-child(2) {
      color: var(--mainPurple);
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    padding: 1rem;
  }

  h3 {
    font-size: 2rem;
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  padding: 3rem 0;
  margin: 0 auto;
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

  width: 300px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    margin-top: 1rem;
  }
`;
