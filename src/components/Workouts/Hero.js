import styled from 'styled-components';
import HeroBanner from '../../images/workouts/fitness_banner_transparent.png';

const Hero = () => {
  return (
    <BannerWrapper>
      <Banner alt='banner' src={HeroBanner} />
    </BannerWrapper>
  );
};

export default Hero;

const BannerWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
`;

const Banner = styled.img`
  width: 65%;
  margin: 0 auto;
`;
