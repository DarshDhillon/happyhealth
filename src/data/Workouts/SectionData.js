import PushUpImg from '../../images/workouts/push_up.jpg';
import PullUpImg from '../../images/workouts/pull_up.jpg';
import { v4 as uuid } from 'uuid';

const SectionData = [
  {
    id: uuid(),
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem vel consequuntur, placeat tempore eveniet soluta hic sunt voluptate suscipit.',
    image: PushUpImg,

    alt: 'push up',
    vertical: false,
    reverse: false,
  },
  {
    id: uuid(),
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem vel consequuntur, placeat tempore eveniet soluta hic sunt voluptate suscipit.',
    image: PullUpImg,

    alt: 'pull up',
    vertical: true,
    reverse: true,
  },
  {
    id: uuid(),
    caption:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem vel consequuntur, placeat tempore eveniet soluta hic sunt voluptate suscipit.',
    image: PushUpImg,

    alt: 'push up',
    vertical: false,
    reverse: false,
  },
];

export default SectionData;
