import styled from 'styled-components';
import BeachImage from '../../images/take5/meditate_beach.svg';
import RainImage from '../../images/take5/meditate_raining.svg';

const Main = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      <ImageContainer>
        <Image src={BeachImage} alt='beach' />
        <Image src={RainImage} alt='rain' />
      </ImageContainer>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  height: 100vh;
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 4rem 0;
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 65%;
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 4rem;

    span {
      color: #009fe3;
    }

    span:nth-child(2) {
      color: #824998;
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
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
`;

const Image = styled.img`
  width: 300px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
