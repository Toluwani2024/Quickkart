import iphone16Image from '../assets/16.jpg';
import iphone13Image from '../assets/13.jpg';
import iphone14Image from '../assets/14.jpg'; // replace with correct path if needed
import smartwatchImage from '../assets/watch.jpg.jpg';
import reactImage from '../assets/book.jpg.jpg';
import jsImage from '../assets/java.jpg';
import tshirtImage from '../assets/white.jpg.jpg';
import jeansImage from '../assets/jean.jpg.jpg';
import pizzaImage from '../assets/pizza.jpg (2).jpg';
import burgerImage from '../assets/burger.jpg.jpg';
import shampooImage from '../assets/shampoo.jpg.jpg';
import hairOilImage from '../assets/white.jpg.jpg';
import androidImage from '../assets/oppo.jpg';
import s8Image from '../assets/s8.jpg';

const products = {
  gadgets: {
    apple: [
      {
        id: 1,
        name: 'iPhone 16',
        price: 699,
        image: iphone16Image,
      },
      {
        id: 2,
        name: 'iPhone 13',
        price: 599,
        image: iphone13Image,
      },
      {
        id: 3,
        name: 'iPhone 14',
        price: 799,
        image: iphone14Image,
      },
    ],
    samsung: [
      {
        id: 4,
        name: 'Samsung Galaxy',
        price: 150,
        image: androidImage,
      },
      {
        id: 5,
        name: 'Samsung S8',
        price: 399,
        image: s8Image,
      },
    ],
    smartwatch: [
      {
        id: 6,
        name: 'Smartwatch',
        price: 199,
        image: smartwatchImage,
      },
    ],
  },

  foods: [
    {
      id: 11,
      name: 'Pizza',
      price: 10,
      image: pizzaImage,
    },
    {
      id: 12,
      name: 'Burger',
      price: 8,
      image: burgerImage,
    },
  ],

  // rest of the categories...
};

export default products;
