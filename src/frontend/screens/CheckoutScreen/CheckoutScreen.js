import React, { useEffect } from "react";
import { AddressCard } from "../../components";
import { useAuth, useUser } from "../../contexts";
import { getAddress } from "../../utils";

const CheckoutScreen = () => {
  const { dispatchUser } = useUser();

  const {
    auth: { token },
  } = useAuth();

  useEffect(() => {
    getAddress(token, dispatchUser);
  }, [token, dispatchUser]);
  return (
    <div className="checkout-container">
      <AddressCard />
    </div>
  );
};

export { CheckoutScreen };
