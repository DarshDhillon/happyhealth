import WorkoutImg from '../../images/homepage/homepage_1.svg';
import FoodImg from '../../images/homepage/homepage_2.svg';
import MeditationImg from '../../images/homepage/homepage_3.svg';
import ShopImg from '../../images/homepage/homepage_4.svg';

import { v4 as uuid } from 'uuid';

const HomePageData = [
  {
    id: uuid(),
    title: 'Work it out',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident magnam sit deserunt qui, fugit cumque earum perferendis autem ipsum facere explicabo. Vel aut suscipit placeat omnis ducimuseveniet reprehenderit.',
    image: WorkoutImg,
    alt: 'workout',
    reverse: false,
  },
  {
    id: uuid(),
    title: 'Eat better',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident magnam sit deserunt qui, fugit cumque earum perferendis autem ipsum facere explicabo. Vel aut suscipit placeat omnis ducimuseveniet reprehenderit.',
    image: FoodImg,
    alt: 'nutrition',
    reverse: true,
  },
  {
    id: uuid(),
    title: 'Mind the gap',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident magnam sit deserunt qui, fugit cumque earum perferendis autem ipsum facere explicabo. Vel aut suscipit placeat omnis ducimuseveniet reprehenderit.',
    image: MeditationImg,
    alt: 'meditating',
    reverse: false,
  },
  {
    id: uuid(),
    title: 'Treat yourself',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident magnam sit deserunt qui, fugit cumque earum perferendis autem ipsum facere explicabo. Vel aut suscipit placeat omnis ducimuseveniet reprehenderit.',
    image: ShopImg,
    alt: 'shopping',
    reverse: true,
  },
];
export default HomePageData;
