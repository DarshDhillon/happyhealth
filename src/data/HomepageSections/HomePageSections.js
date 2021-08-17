import WorkoutImg from '../../images/homepage/homepage_1.svg';
import FoodImg from '../../images/homepage/homepage_2.svg';
import MeditationImg from '../../images/homepage/homepage_3.svg';
import ShopImg from '../../images/homepage/homepage_4.svg';

import { v4 as uuid } from 'uuid';

const homePageData = [
  {
    id: uuid(),
    title: 'Work it out',
    description:
      'Living an active lifestyle has been shown to have many health benefits, both physically and mentally. It may even help you live longer! Check out our essential workout exercises.',
    image: WorkoutImg,
    alt: 'workout',
    reverse: false,
    to: '/workouts',
  },
  {
    id: uuid(),
    title: 'Eat better',
    description:
      'Eating a healthy, well balanced diet is an important part of maintaining good health, and can help you feel your best. Use our free foodie search when deciding what to eat tonight!',
    image: FoodImg,
    alt: 'nutrition',
    reverse: true,
    to: '/foodie',
  },
  {
    id: uuid(),
    title: 'Mind the gap',
    description:
      'Meditation helps to slow your internal chatter, still your mind, calm your inner world, and is a vital form of self-care. Take5 and head over to our meditation app for a much needed mental break.',
    image: MeditationImg,
    alt: 'meditating',
    reverse: false,
    to: '/take5',
  },
  {
    id: uuid(),
    title: 'Treat yourself',
    description: `Day-to-day life is stressful and even the smallest of treats dramatically enchances our mood. Grab yourself a bargain now over at our online store. And to lift someone else's mood, pick them up something too!`,
    image: ShopImg,
    alt: 'shopping',
    reverse: true,
    to: '/shop',
  },
];
export default homePageData;
