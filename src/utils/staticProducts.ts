export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  sizes: string[];
  colors: string[];
}

export interface Reviews {
  name: string;
  rating: number;
  comment: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: "T-shirt",
    description: "A comfortable cotton T-shirt",
    price: "$20",
    imageUrl: "/images/t-shirt.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
  },
  {
    id: '2',
    name: "Shirt",
    description: "A comfortable Shirt",
    price: "$25",
    imageUrl: "/images/shirt.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
  },
  {
    id: '3',
    name: "Jacket",
    description: "A Warm Shirt",
    price: "$50",
    imageUrl: "/images/jacket.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
  },
  {
    id: '4',
    name: "Cargo Pants",
    description: "A Beautiful Cargo Pants",
    price: "$30",
    imageUrl: "/images/cargo.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
  },
];

export const Reviews: Reviews[] = [
  { name: "John Doe", rating: 5, comment: "Great product!" },
  { name: "Jane Smith", rating: 4, comment: "Very good quality." },
];
