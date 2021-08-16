import styled from 'styled-components';
import { useState } from 'react';
import accordionQuestions from '../../data/Accordion/accordionQuestions';

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = (id) => {
    showAnswer === id ? setShowAnswer(null) : setShowAnswer(id);
  };

  return (
    <Container>
      {accordionQuestions.map((item) => (
        <SectionWrapper key={item.id} onClick={() => toggleAnswer(item.id)}>
          <QuestionWrapper reverse={item.reverse}>
            <p>{item.question}</p>
          </QuestionWrapper>
          <AnswerWrapper showAnswer={showAnswer} id={item.id}>
            <p>{item.answer}</p>
          </AnswerWrapper>
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  /* border: 1px solid grey; */
  height: 400px;
  background: transparent;
  width: 600px;
  /* padding: 1rem; */
  border-radius: 0.2rem;
  cursor: pointer;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

const SectionWrapper = styled.div`
  /* display: flex; */
  /* border: 1px solid blue; */

  p {
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const QuestionWrapper = styled.div`
  /* border: 1px solid white; */
  padding: 0.2rem 0;
  height: 20%;
  background-color: ${({ reverse }) =>
    reverse ? 'var(--mainPurple)' : 'var(--mainBlue)'};
  border-radius: 0.5rem;
  margin: 1rem 0;
  /* text-align: center; */
  display: flex;
  justify-content: center;

  p {
    color: #fff;
  }
`;

const AnswerWrapper = styled.div`
  max-height: ${({ showAnswer, id }) => (showAnswer === id ? '20%' : '0')};
  opacity: ${({ showAnswer, id }) => (showAnswer === id ? '1' : '0')};
  margin: 0 auto;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  background: #fff;
  p {
    color: #000;
  }
`;
