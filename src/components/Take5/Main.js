import { useContext } from 'react';
import styled from 'styled-components';
import BeachImage from '../../images/take5/meditate_beach.svg';
import RainImage from '../../images/take5/meditate_raining.svg';
import { ModalVideoContext } from '../../context/Take5/ModalVideoProvider';
import { motion } from 'framer-motion';
import { animationThree } from '../../animations/animationData';

const Main = () => {
  const { handleChooseVideo } = useContext(ModalVideoContext);

  return (
    <Container initial='out' animate='end' exit='out' variants={animationThree}>
      <TextWrapper>
        <h1>
          better <span>mind</span>. better <span>you</span>
        </h1>
        <p>
          As we continue to navigate a new version of reality in our daily
          lives, it remains so important to nourish and nurture our body, mind
          and soul. Even in normal life many of us will experience some form of
          stress or anxiety – it’s part of the journey and our personal growth.
        </p>
        <p>
          There are, of course, many ways and means for managing this, and one
          that can have a profound effect on your mental, physical, and
          emotional wellbeing is meditation. So...
        </p>
        <h3>take5 and relax...</h3>
      </TextWrapper>
      <ImageContainer>
        <Image
          name='beach'
          onClick={handleChooseVideo}
          src={BeachImage}
          alt='beach'
        />
        <Image
          name='rain'
          onClick={handleChooseVideo}
          src={RainImage}
          alt='rain'
        />
      </ImageContainer>
    </Container>
  );
};

export default Main;

const Container = styled(motion.main)`
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 4rem 0;
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

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h3 {
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  padding: 3rem 0;
  margin: 0 auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Image = styled.img`
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
