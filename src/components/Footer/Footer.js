import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoNoText from '../../images/logos/hh_main_notext.png';
import FBIcon from '../../images/logos/facebook_icon.png';
import YTIcon from '../../images/logos/youtube_icon.png';
import TwitterIcon from '../../images/logos/twitter_icon.jpg';
import InstaIcon from '../../images/logos/instagram_icon.png';

const Footer = () => {
  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLink hover='true' to='/'>
            Check Order Status
          </FooterLink>
          <FooterLink to='/'>Customer Service</FooterLink>
          <FooterLink hover='true' to='/'>
            happyhealth Careers
          </FooterLink>
        </FooterLinks>
        <FooterLogo
          onClick={scrollTopPage}
          src={LogoNoText}
          alt='logo-no-text'
        />
        <FooterLinks>
          <FooterLink to='/'>My Account</FooterLink>
          <FooterLink hover='true' to='/'>
            Returns/Exchanges
          </FooterLink>
          <FooterLink to='/'>International Shipments</FooterLink>
        </FooterLinks>
      </FooterWrapper>
      <SocialWrapper>
        <SocialLinks>
          <SocialLink
            href='http://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={FBIcon} />
          </SocialLink>
          <SocialLink
            href='http://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={YTIcon} />
          </SocialLink>
          <SocialLink
            href='http://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={InstaIcon} />
          </SocialLink>
          <SocialLink
            href='http://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={TwitterIcon} />
          </SocialLink>
        </SocialLinks>
      </SocialWrapper>
      <Copyright>© happyhealth {new Date().getFullYear()}</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
  color: #000;
  font-weight: 300;

  &:hover {
    color: ${({ hover }) => (hover ? 'var(--mainPurple)' : 'var(--mainBlue)')};
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const FooterLogo = styled.img`
  width: 80px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
  }
`;

const Copyright = styled.small`
  position: absolute;
  bottom: 10px;
  left: 50;
  font-weight: 400;
`;

const SocialWrapper = styled.div`
  width: 30%;
  padding: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 0 1rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialLink = styled.a``;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
`;
