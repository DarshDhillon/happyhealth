import { v4 as uuid } from 'uuid';

const AccordionQuestions = [
  {
    id: uuid(),
    question: 'What day is it?',
    answer: 'Mon',
    reverse: true,
  },
  {
    id: uuid(),
    question: 'What day is it?',
    answer: 'Tue',
    reverse: false,
  },
  {
    id: uuid(),
    question: 'What day is it?',
    answer: 'Wed',
    reverse: true,
  },
  {
    id: uuid(),
    question: 'What day is it?',
    answer: 'Thu',
    reverse: false,
  },
  {
    id: uuid(),
    question: 'What day is it?',
    answer: 'Fri',
    reverse: true,
  },
];

export default AccordionQuestions;
