import PushUpImg from '../../images/workouts/push_up.jpg';
import PullUpImg from '../../images/workouts/pull_up.jpg';
import SquatImg from '../../images/workouts/squat.jpg';
import SitUpImg from '../../images/workouts/sit_up.jpg';

import { v4 as uuid } from 'uuid';

const sectionData = [
  {
    id: uuid(),
    caption:
      'Pushups are beneficial for building upper body strength. They work the triceps, pec muscles and shoulders. They can also strengthen the lower back and core by engaging the abdominal muscles. Pushups are a fast and effective exercise for building strength.',
    image: PushUpImg,
    alt: 'push up',
    vertical: false,
    reverse: false,
  },
  {
    id: uuid(),
    caption:
      'Pull ups are not only an exercise that’s great for your back, they also boost muscle mass in the biceps, while improving your overall strength in different ways. Pull ups can make you an all-round healthier person. It can be said that pull ups are the king of fitness.',
    image: PullUpImg,
    alt: 'pull up',
    vertical: true,
    reverse: true,
  },
  {
    id: uuid(),
    caption:
      'Squatting is a popular exercise that targets the muscles in the legs, lower back, and core. It can help people strengthen their muscles and burn fat. Squats can be performed with body weight alone or added resistance.',
    image: SquatImg,
    alt: 'squat',
    vertical: false,
    reverse: false,
  },
  {
    id: uuid(),
    caption:
      'If you want to work on your six-pack then you need to be incorporating crunches into your workouts. Crunches target your abs and train them to work in a coordinated manner. Other exercises, like push ups, side planks and glute bridges also help train the abs.',
    image: SitUpImg,
    alt: 'squat',
    vertical: true,
    reverse: true,
  },
];

export default sectionData;
