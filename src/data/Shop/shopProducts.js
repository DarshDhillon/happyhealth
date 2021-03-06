import { v4 as uuid } from 'uuid';

const shopProducts = [
  {
    id: uuid(),
    productName: `Gym bag green`,
    productDescription: `A gym bag in disgusting puke green. Buy it!`,
    price: 30,
    quantity: 0,
    img: require('../../images/shop/shopItems/gymbag_green.jpg').default,
    alt: 'gym bag green ',
  },
  {
    id: uuid(),
    productName: `Beanie Unisex black`,
    productDescription:
      'Designer comfort beanie exclusively designed by East 17',
    price: 15,
    quantity: 0,
    img: require('../../images/shop/shopItems/beanie_unisex_black.jpg').default,
    alt: 'beanie black',
  },
  {
    id: uuid(),
    productName: `Chef's jacket white`,
    productDescription:
      'This is a chef jacket. For some reason I added this to the store. It looks cool, tho',
    price: 49,
    quantity: 0,
    img: require('../../images/shop/shopItems/chef_jacket_white.jpg').default,
    alt: 'chef jacket',
  },
  {
    id: uuid(),
    productName: `Sleeveless Training shirt`,
    productDescription: `A super tight, uncomfortable ugly grey shirt to show off your 'guns'`,
    price: 15,
    quantity: 0,
    img: require('../../images/shop/shopItems/sleeveless_training_grey.jpg')
      .default,
    alt: 'sleeveless training grey',
  },
  {
    id: uuid(),
    productName: `Men's polo black`,
    productDescription:
      'Designed from a cotton piqué fabric which is durable, breathable and features a button placket, ribbed collar and cuffs',
    price: 20,
    quantity: 0,
    img: require('../../images/shop/shopItems/polo_black.jpg').default,
    alt: 'polo black',
  },
  {
    id: uuid(),
    productName: `Fleece women's red`,
    productDescription: `A fleece. For women. Or men who like to wear women's clothes. It's red`,
    price: 29,
    quantity: 0,
    img: require('../../images/shop/shopItems/fleece_womens_red.jpg').default,
    alt: 'fleece red',
  },
  {
    id: uuid(),
    productName: `Men's polo white`,
    productDescription: `I couldn't think of anything original for this one`,
    price: 20,
    quantity: 0,
    img: require('../../images/shop/shopItems/polo_white.jpg').default,
    alt: 'polo white',
  },
  {
    id: uuid(),
    productName: `Polo women's green`,
    productDescription: `I'm running out of ideas now. Is dinner ready yet?`,
    price: 29,
    quantity: 0,
    img: require('../../images/shop/shopItems/polo_green_womens.jpg').default,
    alt: 'polo women green ',
  },
  {
    id: uuid(),
    productName: `Gym bag blue`,
    productDescription: `A bag designed to take stuff to the gym except you never go so really it's just a bag`,
    price: 25,
    quantity: 0,
    img: require('../../images/shop/shopItems/gymbag_blue.jpg').default,
    alt: 'gym bag blue',
  },
  {
    id: uuid(),
    productName: `T Shirt women's green`,
    productDescription: `This 100% fake cotton T shirt is guaranteed to make you look like a ninja turtle`,
    price: 15,
    quantity: 0,
    img: require('../../images/shop/shopItems/tshirt_womens_green.jpg').default,
    alt: 'T women green',
  },
  {
    id: uuid(),
    productName: `Black men's jacket`,
    productDescription: `You'll be wearing this daily. Not because you like it but because England's cold`,
    price: 59,
    quantity: 0,
    img: require('../../images/shop/shopItems/jacket_mens_black.jpg').default,
    alt: 'jacket men black',
  },
  {
    id: uuid(),
    productName: `Hoodie women's white`,
    productDescription: `Wear this hoodie with pride to Tesco when buying 20 Lambert & Butlers`,
    price: 59,
    quantity: 0,
    img: require('../../images/shop/shopItems/hoodie_womens_white.jpg').default,
    alt: 'hoodie women white',
  },
  {
    id: uuid(),
    productName: `Blue kit bag`,
    productDescription: `Carry your 'kit' in this blue bag like a massive virgin`,
    price: 59,
    quantity: 0,
    img: require('../../images/shop/shopItems/kit_bag_blue.jpg').default,
    alt: 'kit blag blue',
  },

  {
    id: uuid(),
    productName: `Polo women's yellow`,
    productDescription: `A 100% pure fake cotton polo for women to wear while playing polo`,
    price: 29,
    quantity: 0,
    img: require('../../images/shop/shopItems/polo_yellow_womens.jpg').default,
    alt: 'polo women yellow',
  },
  {
    id: uuid(),
    productName: `Gymvest women's green`,
    productDescription: `A heavy barbell like that should really be laid flat on the ground`,
    price: 15,
    quantity: 0,
    img: require('../../images/shop/shopItems/gymvest_green_womens.jpg')
      .default,
    alt: 'gym vest women green',
  },
  {
    id: uuid(),
    productName: `Gym socks unisex white`,
    productDescription: `Breathable gym socks. Apparently Jimmy Saville used to own a similar pair`,
    price: 8,
    quantity: 0,
    img: require('../../images/shop/shopItems/gym_socks_white.jpg').default,
    alt: 'gym socks white',
  },
  {
    id: uuid(),
    productName: `Gym vest unisex orange`,
    productDescription: `This gym vest is perfect for showing off your underarm hair`,
    price: 14,
    quantity: 0,
    img: require('../../images/shop/shopItems/gym_vest_men_orange.jpg').default,
    alt: 'gym vest orange',
  },
  {
    id: uuid(),
    productName: `Football shorts white`,
    productDescription: `There's a small chance I pinched these images and added my own logo onto them`,
    price: 25,
    quantity: 0,
    img: require('../../images/shop/shopItems/football_shorts_white.jpg')
      .default,
    alt: 'football shorts white',
  },
  {
    id: uuid(),
    productName: `Golf umbrella`,
    productDescription: `A golf umbrella that can be used anywhere including a golf course. Basically just an umbrella`,
    price: 30,
    quantity: 0,
    img: require('../../images/shop/shopItems/golf_umbrella.jpg').default,
    alt: 'golf umbrella',
  },
  {
    id: uuid(),
    productName: `Training headband`,
    productDescription: `Keep your hair tucked back as you train (unless you're bald)`,
    price: 10,
    quantity: 0,
    img: require('../../images/shop/shopItems/headband_training.jpg').default,
    alt: 'training headband',
  },
];

export default shopProducts;
