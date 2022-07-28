import { createContext, useContext, useReducer, useState } from "react";
import { userReducer } from "../reducers";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, {
    address: [],
  });
  const [deliveryAddress, setDeliveryAddress] = useState("");

  return (
    <UserContext.Provider
      value={{ user, dispatchUser, deliveryAddress, setDeliveryAddress }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
