import styled from 'styled-components';
import Sections from '../components/Workouts/Sections';
import Hero from '../components/Workouts/Hero';

const Workouts = () => {
  return (
    <Container>
      <Hero />
      <Sections />
    </Container>
  );
};

export default Workouts;

const Container = styled.main`
  /* border: 1px solid red; */
  padding-bottom: 2rem;
  background: linear-gradient(#e8f2f7, #f0e9f3);
`;
