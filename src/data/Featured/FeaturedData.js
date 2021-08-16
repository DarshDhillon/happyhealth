import BBCNews from '../../images/featured/bbc_news3.png';
import DailyMail from '../../images/featured/daily_mail.png';
import KissFM from '../../images/featured/kiss_fm.png';
import SkyNews from '../../images/featured/sky_news2.png';
import ReadersDigest from '../../images/featured/readers_digest.svg';
import WomensHealth from '../../images/featured/womens_health.png';
import CyclingWeekly from '../../images/featured/cycling_weekly.png';
import { v4 as uuid } from 'uuid';

const featuredData = [
  {
    img: WomensHealth,
    id: uuid(),
  },
  {
    img: DailyMail,
    id: uuid(),
  },
  {
    img: CyclingWeekly,
    id: uuid(),
  },
  {
    img: BBCNews,
    id: uuid(),
  },
  {
    img: KissFM,
    id: uuid(),
  },

  {
    img: ReadersDigest,
    id: uuid(),
  },

  {
    img: SkyNews,
    id: uuid(),
  },
];

export default featuredData;
