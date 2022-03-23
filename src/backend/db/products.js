import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Barbasol Can",
    description: "to sneak dino DNA cryo vials",
    price: "5000",
    categoryName: "Jurassic Park",
    imageUrl: "assets/products/barbasol.png",
  },
  {
    _id: uuid(),
    name: "Mosquito in Amber",
    description: "the OG dino founder",
    price: "3000",
    categoryName: "Jurassic Park",
    imageUrl: "assets/products/jurassic-musquito.png",
  },
  {
    _id: uuid(),
    name: "Raptor Resonating Chamber",
    description: "to be friends with a raptor",
    price: "1000",
    categoryName: "Jurassic Park III",
    imageUrl: "assets/products/raptor-resonating-chamber.png",
  },
];
