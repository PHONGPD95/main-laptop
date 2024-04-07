import img13 from '@/public/assets/products/electronics/13.webp';
import img9 from '@/public/assets/products/electronics/1.webp';
import img7 from '@/public/assets/products/electronics/16.webp';
import img15 from '@/public/assets/products/electronics/2.webp';
import img8 from '@/public/assets/products/electronics/24.webp';
import img1 from '@/public/assets/products/electronics/3.webp';
import img2 from '@/public/assets/products/electronics/7.webp';
import img16 from '@/public/assets/products/electronics/8.webp';
import img12 from '@/public/assets/products/fashion/10.webp';
import img14 from '@/public/assets/products/fashion/2.webp';
import img5 from '@/public/assets/products/fashion/4.webp';
import img10 from '@/public/assets/products/food/12.webp';
import img11 from '@/public/assets/products/food/13.webp';
import img6 from '@/public/assets/products/food/18.webp';
import img3 from '@/public/assets/products/food/3.webp';
import img4 from '@/public/assets/products/services/1.webp';
import { faker } from '@faker-js/faker';

export type Product = {
  sku: string;
  image: any; // Replace with the actual type of img1
  name: string;
  stock: number;
  price: number;
  category: string;
  type: string;
  statistics: string;
  tags: string[];
  rateCount: number;
  date: Date;
  status: string;
};

const products = [
  {
    sku: 'TR-001',
    image: img1,
    name: 'Xiaomi WiFI Repeater Pro',
    stock: 120,
    price: 254,
    category: 'electronics',
    type: 'simple',
    statistics: 'best seller',
    tags: ['top rated', 'best seller', 'phone'],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-002',
    image: img2,
    name: 'Logi Wireless Keyboard',
    stock: 3,
    price: 117,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: [],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-003',
    image: img3,
    name: 'Spry Chewing Gum 100 Pack Mint',
    stock: 0,
    price: 12.3,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'new in',
    tags: [],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-004',
    image: img4,
    name: 'Delivery box package',
    price: 9.99,
    category: 'services',
    type: 'service',
    statistics: 'featured',
    tags: ['top rated', 'best seller', 'phone'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'trash',
  },
  {
    sku: 'TR-005',
    image: img5,
    name: 'Traum Signature Graffiti Hat',
    stock: 345,
    price: 120.35,
    category: 'fashion',
    type: 'simple',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft',
  },
  {
    sku: 'TR-006',
    image: img6,
    name: 'Ferrero Rocher 16 Pack Special',
    stock: 0,
    price: 504,
    category: 'food & drinks',
    type: 'simple',
    tags: ['food', 'sweets', 'gifts'],
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft',
  },
  {
    sku: 'TR-007',
    image: img7,
    name: 'ELITE LCD Display Liquid CPU Cooler',
    stock: 0,
    price: 99.99,
    category: 'electronics',
    type: 'simple',
    statistics: 'best seller',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft',
  },
  {
    sku: 'TR-008',
    image: img8,
    name: 'Acer GVB708 15" Laptop Silver',
    stock: 2,
    price: 117,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: [],
    rateCount: 4,
    date: faker.date.past(),
    status: 'trash',
  },
  {
    sku: 'TR-009',
    image: img9,
    name: 'Oculus Quest 2 VR Headset',
    stock: 9,
    price: 299,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['VR', 'Meta', 'Oculus', 'Gaming'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-010',
    image: img10,
    name: 'Pergale Picks Strawberry 1kg',
    stock: 354,
    price: 12.3,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'new in',
    tags: [],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-011',
    image: img11,
    name: 'Skittles Fruitty Family Pack',
    stock: 0,
    price: 9.99,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'featured',
    tags: ['top rated', 'best seller', 'sweets'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-012',
    image: img12,
    name: 'Yumi Sunny Yellow City Backpack',
    stock: 98,
    price: 120.35,
    category: 'fashion',
    type: 'simple',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft',
  },
  {
    sku: 'TR-013',
    image: img13,
    name: 'UPS Express Shipping',
    price: 9.99,
    category: 'services',
    type: 'service',
    statistics: 'featured',
    tags: [],
    rateCount: 3,
    date: faker.date.past(),
    status: 'trash',
  },
  {
    sku: 'TR-014',
    image: img14,
    name: 'SNSY Fancy Red Woman Sandals',
    stock: 0,
    price: 58.72,
    category: 'fashion',
    type: 'simple',
    tags: ['top rated', 'best seller', 'shoes'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'draft',
  },
  {
    sku: 'TR-015',
    image: img15,
    name: 'Nintendo Switch Gaming Console',
    stock: 874,
    price: 299,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['Nintendo', 'Gaming', 'Console'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish',
  },
  {
    sku: 'TR-016',
    image: img16,
    name: 'ARTLINE Overlord Gaming PC',
    stock: 7,
    price: 497,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['Gaming', 'PC', 'Computer'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'trash',
  },
];

export default products;
