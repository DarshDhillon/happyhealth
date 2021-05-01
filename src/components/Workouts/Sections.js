import styled from 'styled-components';
import SectionData from '../../data/Workouts/SectionData';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Sections = () => {
  return (
    <>
      {SectionData.map((item, index) => (
        <InView key={index} threshold={0.5}>
          {({ ref, inView }) => (
            <Section key={item.id} reverse={item.reverse}>
              <TextWrapper>
                <Caption> {item.caption}</Caption>
              </TextWrapper>
              <ImageWrapper>
                <Image
                  ref={ref}
                  initial={{ opacity: 0, x: -250 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -250 }
                  }
                  transition={{ duration: 0.8 }}
                  vertical={item.vertical}
                  src={item.image}
                  alt={item.alt}
                />
              </ImageWrapper>
            </Section>
          )}
        </InView>
      ))}
    </>
  );
};

export default Sections;

const Section = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  padding: 1rem 0;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  border: 1px solid red;
  /* align-self: flex-start; */
  width: 30%;

  @media screen and (max-width: 1100px) {
    margin-bottom: 2rem;
    width: 70%;
    text-align: center;
  }
`;

const Caption = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid blue;
  width: 50%;
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

const Image = styled(motion.img)`
  border-radius: 0.5rem;
  width: ${({ vertical }) => (vertical ? '70%' : '100%')};
  /* object-fit: cover; */
`;