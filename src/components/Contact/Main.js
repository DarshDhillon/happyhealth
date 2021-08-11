import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

const Main = () => {
  return (
    <Container>
      <Heading>Got a question? Get in touch..</Heading>
      <ContactImage
        src={require('../../images/contact/contact_us.svg').default}
      />
      <ContactInfoWrapper>
        <AddressWrapper>
          <Address>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            Happy Health Ltd, Hornsey Road, London, N7 7AJ{' '}
          </Address>
        </AddressWrapper>
        <ContactWrapper>
          <Phone>
            <ContactIcon>
              <MdPhone />
            </ContactIcon>
            0208 7654321
          </Phone>
          <Email>
            <ContactIcon>
              <MdEmail />
            </ContactIcon>
            <a href='mailto: enquiries@happy-health.uk'>Drop us an email</a>
          </Email>
        </ContactWrapper>
      </ContactInfoWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  /* border: 1px solid black; */
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* padding: 4rem 2rem; */
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--mainPurple);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactInfoWrapper = styled.div`
  /* border: 1px solid red; */
  min-width: 50%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  p {
    text-align: center;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

const ContactImage = styled.img`
  width: 700px;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
  }
`;

const AddressWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  /* flex-direction: column; */
`;

const ContactWrapper = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  align-items: center;

  justify-content: space-around;

  display: flex;
`;

const Email = styled.p`
  a {
    color: #000;
    text-decoration: none;
  }
`;

const Address = styled.p``;

const Phone = styled.p``;

const ContactIcon = styled.i`
  font-size: 1.8rem;
  margin-right: 1rem;
  color: var(--mainBlue);

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
