import styled from 'styled-components';
import ShopBannerImg from '../../images/shop/123.jpg';

const ShopBanner = () => {
  return (
    <BannerWrapper>
      <Banner src={ShopBannerImg} alt='shop banner' />
      <TextWrapper>
        <h1>
          <span>shop</span> to your healthy <span>heart's </span>content
        </h1>
      </TextWrapper>
    </BannerWrapper>
  );
};

export default ShopBanner;

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;
`;

const Banner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
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
