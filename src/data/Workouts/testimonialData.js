import LucilleImg from '../../images/workouts/lucille.png';
import GobImg from '../../images/workouts/gob.png';
import LindsayImg from '../../images/workouts/lindsay.png';
import GeorgeMImg from '../../images/workouts/george_michael.png';
import TobiasImg from '../../images/workouts/tobias.png';
import { v4 as uuid } from 'uuid';

const testimonialData = [
  {
    id: uuid(),
    testimonialPerson: 'Lucille, 64',
    testimonialText:
      '" Since signing up for the Elite membership my drinking habit has gotten much better! "',
    testimonialImage: LucilleImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Gob, 42',
    testimonialText: `" I've lost over 20 pounds thanks to happyhealth and their trainers. It's like magic! "`,
    testimonialImage: GobImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'George-Michael, 17',
    testimonialText: `" happyhealth motivated me to go the gym with my cousin, where I ride her, hard "`,
    testimonialImage: GeorgeMImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Lindsay, 39',
    testimonialText: `" Being healthy again has driven me to do great things, like shopping and getting my hair done "`,
    testimonialImage: LindsayImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Tobias, 38',
    testimonialText: `" For there's a man inside me, and only when he's finally out can I walk free of pain "`,
    testimonialImage: TobiasImg,
  },
];

export default testimonialData;
