import styled from 'styled-components';
import HeroBanner from '../../images/workouts/fitness_banner_transparent.png';

const Hero = () => {
  return (
    <BannerWrapper>
      <TextWrapper>
        <h1>
          <span>build</span> yourself a <span>better </span>body
        </h1>
      </TextWrapper>
      <Banner alt='banner' src={HeroBanner} />
    </BannerWrapper>
  );
};

export default Hero;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img`
  width: 65%;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  text-align: center;
  padding: 3rem 0;
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
