import type { Product } from "../interfaces/Product";

export const vegItems: Product[] = [
  {
    id: 101,
    name: "Beans",
    price: 30,
    imageurl: "/images/vegitems/beans.png",
    description: "Fresh green beans, packed with proteins and fiber.",
  },
  {
    id: 102,
    name: "Brinjal",
    price: 1,
    imageurl: "/images/vegitems/brinjal.png",
    description: "Glossy purple brinjal, perfect for baking and curries.",
  },
  {
    id: 103,
    name: "Broccoli",
    price: 80,
    imageurl: "/images/vegitems/broccalli1.png",
    description: "Crisp, nutrient-rich organic broccoli heads.",
  },
  {
    id: 104,
    name: "Capcicum",
    price: 40,
    imageurl: "/images/vegitems/capcicum1.png",
    description: "Fresh and crunchy green bell peppers.",
  },
  {
    id: 105,
    name: "Onion",
    price: 35,
    imageurl: "/images/vegitems/onion.png",
    description: "Farm-fresh onions with sharp flavor.",
  },
  {
    id: 106,
    name: "Carrot",
    price: 60,
    imageurl: "/images/vegitems/carrot.png",
    description: "Sweet, crunchy orange carrots directly from the farm.",
  },
  {
    id: 107,
    name: "Tomato",
    price: 25,
    imageurl: "/images/vegitems/tomato.png",
    description: "Juicy, ripe red tomatoes ideal for salads and gravies.",
  },
  {
    id: 108,
    name: "Spinach",
    price: 30,
    imageurl: "/images/vegitems/spinach.png",
    description: "Freshly harvested green spinach leaves.",
  },
];

export const nonVegItems: Product[] = [
  {
    id: 201,
    name: "Chicken",
    price: 280,
    imageurl: "/images/nonveg/chicken.png",
    description: "Fresh tender skinless chicken, rich in lean protein.",
  },
  {
    id: 202,
    name: "Mutton",
    price: 850,
    imageurl: "/images/nonveg/mutton.png",
    description: "Premium quality fresh lamb meat, juicy and tender.",
  },
  {
    id: 203,
    name: "Crab",
    price: 600,
    imageurl: "/images/nonveg/crab.png",
    description: "Fresh mud crabs, sweet and delicate meat.",
  },
  {
    id: 204,
    name: "Lobster",
    price: 1200,
    imageurl: "/images/nonveg/lobster.png",
    description: "Exotic and rich deep-sea lobsters.",
  },
  {
    id: 205,
    name: "Fish",
    price: 350,
    imageurl: "/images/nonveg/fish.png",
    description: "Freshwater fish, clean cut and ready to cook.",
  },
  {
    id: 206,
    name: "Prawns",
    price: 500,
    imageurl: "/images/nonveg/prawns.png",
    description: "Premium deshelled prawns, sweet and delicious.",
  },
];

export const milkItems: Product[] = [
  {
    id: 301,
    name: "Milk",
    price: 38,
    imageurl: "/images/milkitems/milk.png",
    description: "Pasteurized farm fresh milk, rich in calcium and vitamins.",
  },
  {
    id: 302,
    name: "Curd",
    price: 38,
    imageurl: "/images/milkitems/curd.png",
    description: "Thick and creamy probiotic yogurt, good for digestion.",
  },
  {
    id: 303,
    name: "Paneer",
    price: 98,
    imageurl: "/images/milkitems/paneer.png",
    description: "Fresh and soft cottage cheese block, packed with protein.",
  },
  {
    id: 304,
    name: "Cheese",
    price: 120,
    imageurl: "/images/milkitems/cheese.png",
    description: "Premium processed cheese slices, melts beautifully.",
  },
  {
    id: 305,
    name: "Butter",
    price: 55,
    imageurl: "/images/milkitems/butter.png",
    description: "Rich, salted farm butter, perfect for spreading & baking.",
  },
];

export const allProducts: Product[] = [
  ...vegItems,
  ...nonVegItems,
  ...milkItems,
];
