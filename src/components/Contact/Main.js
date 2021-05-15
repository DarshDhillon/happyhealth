import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

const Main = () => {
  return (
    <Container>
      <Heading>Got a question? Let's talk..</Heading>
      <ContactImage
        src={require('../../images/contact/contact_us.svg').default}
      />
      <Address>
        {' '}
        <span>
          <FaMapMarkerAlt />
        </span>{' '}
        Happy Health Ltd, Hornsey Road, London, N7 7AJ
      </Address>
      <Phone>
        {' '}
        <span>
          <MdPhone />
        </span>{' '}
        0208 7654321
      </Phone>
      <Email>
        {' '}
        <span>
          <MdEmail />
        </span>{' '}
        equiries@happy-health.uk
      </Email>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--mainPurple);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactImage = styled.img`
  width: 35vw;
`;

const Address = styled.p`
  font-size: 2rem;
`;

const Phone = styled.p`
  font-size: 2rem;
`;

const Email = styled.p`
  font-size: 2rem;
`;
