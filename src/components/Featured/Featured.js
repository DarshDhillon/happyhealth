import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import featuredData from '../../data/Featured/featuredData';
import 'react-slideshow-image/dist/styles.css';

const Featured = () => {
  return (
    <Container>
      <Headline>As featured on:</Headline>
      <Slide
        duration={2000}
        arrows={false}
        pauseOnHover={false}
        canSwipe={false}
      >
        {featuredData.map((item) => (
          <ImgWrapper key={item.id}>
            <Image src={item.img} />
          </ImgWrapper>
        ))}
      </Slide>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  padding: 1rem;
  position: relative;
  user-select: none;

  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

const Headline = styled.small`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.2rem;
  font-weight: 200;
`;

const Image = styled.img`
  user-select: none;

  width: 180px;

  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;

const ImgWrapper = styled.div`
  user-select: none;

  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
