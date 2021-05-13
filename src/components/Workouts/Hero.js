import styled from 'styled-components';
import HeroBanner from '../../images/workouts/fitness_banner_2.jpg';

const Hero = () => {
  return (
    <BannerWrapper>
      <Banner alt='banner' src={HeroBanner} />
    </BannerWrapper>
  );
};

export default Hero;

const BannerWrapper = styled.div`
  border: 1px solid black;
`;

const Banner = styled.img`
  width: 100%;
`;
