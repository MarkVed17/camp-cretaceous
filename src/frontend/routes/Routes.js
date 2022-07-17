import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";
import {
  CartScreen,
  HomeScreen,
  ProductsScreen,
  WishlistScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";
import Mockman from "mockman-js";
import { ScrollToTop } from "../components";

const Router = () => {
  const { auth } = useAuth();
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishlistScreen />
            </PrivateRoute>
          }
        />
        {!auth.status && (
          <>
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </>
        )}
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ScrollToTop>
  );
};

export { Router };
