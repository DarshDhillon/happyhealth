import styled from 'styled-components';
import ShopBannerImg from '../../images/shop/123.jpg';

const ShopBanner = () => {
  return (
    <BannerWrapper>
      <Banner src={ShopBannerImg} alt='shop banner' />
    </BannerWrapper>
  );
};

export default ShopBanner;

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  height: 300px;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
