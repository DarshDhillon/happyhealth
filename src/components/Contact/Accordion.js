import styled from 'styled-components';
import { useState } from 'react';
import AccordionQuestions from '../../data/Accordion/AccordionQuestions';

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = (index) => {
    showAnswer === index ? setShowAnswer(null) : setShowAnswer(index);
  };

  return (
    <Container>
      {AccordionQuestions.map((item, index) => (
        <SectionWrapper key={item.id} onClick={() => toggleAnswer(index)}>
          <QuestionWrapper>
            <TextWrapper>
              <p>{item.question}</p>
            </TextWrapper>
          </QuestionWrapper>
          <AnswerWrapper showAnswer={showAnswer} index={index}>
            <TextWrapper>
              <p>{item.answer}</p>
            </TextWrapper>
          </AnswerWrapper>
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  background-color: lightblue;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const SectionWrapper = styled.div``;

const QuestionWrapper = styled.div`
  height: 20%;
  background-color: lightcoral;
  margin: 0 auto;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

const AnswerWrapper = styled.div`
  display: ${({ showAnswer, index }) =>
    showAnswer === index ? 'in-block' : 'none'};

  height: 20%;
  background-color: darkgreen;
  margin: 0 auto;
  border-radius: 0.5rem;
  transform: ${({ showAnswer, index }) =>
    showAnswer === index ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ showAnswer, index }) => (showAnswer === index ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;

const TextWrapper = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;

  p {
    font-size: 1.5rem;
    color: #fff;
  }
`;
