import styled from 'styled-components';
import HeroVideo from '../../videos/Home/hero_vid.mp4';

const Hero = () => {
  return (
    <HeroMain>
      <HeroVid src={HeroVideo} muted autoPlay />
    </HeroMain>
  );
};

export default Hero;

const HeroMain = styled.main`
  background: #e8f2f7;
  height: 450px;
  width: 100%;
  /* position: relative; */
`;

const HeroVid = styled.video`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  /* bottom: 0; */
  height: 100%;
  width: 100%;
`;
