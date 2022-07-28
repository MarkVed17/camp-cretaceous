import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vedant",
    lastName: "Lahane",
    email: "vedant@example.com",
    password: "vedant123",
    address: [
      {
        _id: uuid(),
        name: "Vedant Lahane",
        mobile: "9999999999",
        area: "Colaba",
        locality: "Near Cafe Mondegar",
        pincode: "444444",
        city: "Mumbai",
        state: "Maharashtra",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
