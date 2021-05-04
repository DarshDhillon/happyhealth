import styled from 'styled-components';
import Accordion from '../components/Contact/Accordion';
import Map from '../components/Contact/Map';

const Contact = () => {
  return (
    <Container>
      <Accordion />
      <Map />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(#e8f2f7, #f0e9f3);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
