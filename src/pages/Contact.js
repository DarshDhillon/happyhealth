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
  /* border: 1px solid black; */
  /* height: 100vh; */
  /* width: 100%; */
  background: linear-gradient(#e8f2f7, #f0e9f3);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;
