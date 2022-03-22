import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CartScreen,
  HomeScreen,
  ProductsScreen,
  WishlistScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";
import Mockman from "mockman-js";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/wishlist" element={<WishlistScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { Router };
