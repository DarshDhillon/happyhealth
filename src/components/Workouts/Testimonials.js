import HorizontalScroll from 'react-scroll-horizontal';
import styled from 'styled-components';
import testimonialData from '../../data/Workouts/testimonialData';

const Testimonials = () => {
  return (
    <ScrollContainer>
      <HorizontalScroll reverseScroll={true}>
        {testimonialData.map((testimonial) => (
          <InnerDiv key={testimonial.id}>
            <TestimonialCard>
              <TestimonialTextWrapper>
                <TestimonialText>{testimonial.testimonialText}</TestimonialText>
              </TestimonialTextWrapper>
              <CharImg src={testimonial.testimonialImage} />
              <CharName>{testimonial.testimonialPerson}</CharName>
            </TestimonialCard>
          </InnerDiv>
        ))}
      </HorizontalScroll>
    </ScrollContainer>
  );
};

export default Testimonials;

const ScrollContainer = styled.div`
  margin-top: 10rem;
  border: 3px var(--mainPurple);
  border-style: solid none;
  padding: 2rem 0;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  /* border: 1px solid red; */
  cursor: col-resize;
  width: 50vw;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    width: 75vw;
  }

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const TestimonialCard = styled.div`
  /* border: 1px solid black; */
  background-color: var(--mainBlue);
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TestimonialTextWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 0 2rem;
  width: 80%;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #fff;
  font-weight: bolder;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

const CharImg = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const CharName = styled.p`
  /* color: var(--mainPurple); */
  font-size: 1.2rem;
  font-weight: bold;
`;
