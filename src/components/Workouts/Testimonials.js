import styled from 'styled-components';
import HorizontalScroll from './HorizontalScroll';
// import TestScroll from './TestScroll';

const Testimonials = () => {
  return (
    <HorizontalScroll>
      <CardsContainer>
        <SampleCard></SampleCard>
        <SampleCard></SampleCard>
        <SampleCard></SampleCard>
        <SampleCard></SampleCard>
        <SampleCard></SampleCard>
        <SampleCard></SampleCard>
      </CardsContainer>
    </HorizontalScroll>
  );
};

export default Testimonials;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 700px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;
