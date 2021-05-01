import styled from 'styled-components';
import SkyNews from '../../images/featured/sky_news2.png';
import BBCNews from '../../images/featured/bbc_news3.png';
import DailyMail from '../../images/featured/daily_mail.png';
import KissFM from '../../images/featured/kiss_fm.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Featured = () => {
  return (
    <Container>
      <Headline>As featured on:</Headline>
      <Slide duration={2000} arrows={false} pauseOnHover={false}>
        <ImgWrapper>
          <Image src={SkyNews} />
        </ImgWrapper>
        <ImgWrapper>
          <Image src={BBCNews} />
        </ImgWrapper>
        <ImgWrapper>
          <Image src={DailyMail} />
        </ImgWrapper>
        <ImgWrapper>
          <Image src={KissFM} />
        </ImgWrapper>
      </Slide>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  padding: 2rem;
  border-bottom: 1px solid lightgray;
  position: relative;
`;

const Headline = styled.small`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  font-weight: 200;
`;

const Image = styled.img`
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid red; */
`;
