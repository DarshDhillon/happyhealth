import styled from 'styled-components';
import Accordion from '../components/Contact/Accordion';
import Map from '../components/Contact/Map';
import Main from '../components/Contact/Main';

const Contact = () => {
  return (
    <Container>
      <Main />
      <Wrapper>
        <Accordion />
        <Map />
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background: linear-gradient(#e8f2f7, #f0e9f3);
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0;
  flex-wrap: wrap;
`;
