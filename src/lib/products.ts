
export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: number;
  status?: string;
  taxNo?: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Awesome Product 1',
    description: 'This is the first awesome product.',
    image: '/placeholder.svg',
    price: 29.99,
    status: 'In Stock',
    taxNo: '12345',
  },
  {
    id: '2',
    name: 'Fantastic Product 2',
    description: 'This is the second fantastic product.',
    image: '/placeholder.svg',
    price: 49.99,
    status: 'Out of Stock',
    taxNo: '67890',
  },
  {
    id: '3',
    name: 'Incredible Product 3',
    description: 'This is the third incredible product.',
    image: '/placeholder.svg',
    price: 79.99,
    status: 'In Stock',
    taxNo: '10112',
  },
];