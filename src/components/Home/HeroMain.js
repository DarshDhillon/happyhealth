import styled from 'styled-components';
import HeroVideo from '../../videos/Home/hero_vid.mp4';

const HeroMain = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <h1>
          <span>just</span> what the <span>doctor </span>ordered
        </h1>
      </TextWrapper>
      <VideoWrapper>
        <HeroVid src={HeroVideo} muted loop />
      </VideoWrapper>
    </HeroContainer>
  );
};

export default HeroMain;

const HeroContainer = styled.main`
  background: #e8f2f7;
  width: 100%;
`;

const VideoWrapper = styled.div`
  padding: 2rem 0;
`;

const HeroVid = styled.video`
  height: 450px;
  width: 100%;
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
