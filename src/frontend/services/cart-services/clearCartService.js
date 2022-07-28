import axios from "axios";

export const clearCartService = async (setCart, token) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/clearCart`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(data.cart);
  } catch (error) {
    console.error(error);
    return;
  }
};
