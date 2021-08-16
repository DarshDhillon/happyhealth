import LucilleImg from '../../images/workouts/lucille.png';
import MichaelImg from '../../images/workouts/michael.png';
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
      'Since signing up for the Elite package my drinking habit has gotten much better!',
    testimonialImage: LucilleImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Michael, 40',
    testimonialText:
      'Since signing up for the Elite package my drinking habit has gotten much better!',
    testimonialImage: MichaelImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Gob, 42',
    testimonialText: `I've lost over 20 pounds thanks to happyhealth and their trainers. It's like magic!`,
    testimonialImage: GobImg,
  },
  {
    id: uuid(),
    testimonialPerson: 'Lindsay, 39',
    testimonialText: `Being healthy again has motivated me to do great things, like shopping and getting my hair done `,
    testimonialImage: LindsayImg,
  },
];

export default testimonialData;
