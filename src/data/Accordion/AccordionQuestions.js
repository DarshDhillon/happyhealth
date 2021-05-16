import { v4 as uuid } from 'uuid';

const dayToday = new Intl.DateTimeFormat('en-UK', { weekday: 'long' }).format();

const AccordionQuestions = [
  {
    id: uuid(),
    question: `What if my item doesn't turn up?`,
    answer: `Then it's likely the post man lost it`,
    reverse: true,
  },
  {
    id: uuid(),
    question: 'What day is it today?',
    answer: dayToday,
    reverse: false,
  },
  {
    id: uuid(),
    question: `How do I cancel my workout subscription?`,
    answer: `You can't; we're going to bill you forever`,
    reverse: true,
  },
  {
    id: uuid(),
    question: 'How can I contact you?',
    answer: `You're literally on the "contact" page`,
    reverse: false,
  },
  {
    id: uuid(),
    question: 'Why does this section only have 5 questions?',
    answer: 'Because the kids need new shoes',
    reverse: true,
  },
];

export default AccordionQuestions;
