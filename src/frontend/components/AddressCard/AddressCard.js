import React, { useState, useEffect } from "react";
import { useAuth, useUser } from "../../contexts";
import { getAddress, deleteAddress } from "../../utils";
import { AddressModal } from "../../components";
import "./AddressCard.css";
import { useNavigate, useLocation } from "react-router";

const AddressCard = () => {
  const {
    auth: { token },
  } = useAuth();
  const {
    user: { address },
    dispatchUser,
    deliveryAddress,
    setDeliveryAddress,
  } = useUser();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAddress, setModalAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getAddress(token, dispatchUser);
    setDeliveryAddress("");
  }, [token, dispatchUser, setDeliveryAddress]); 

  return (
    <div>
      {address?.length > 0 ? (
        <div className="address-main-container">
          {pathname === "/checkout" && (
            <h2 className="select-address">Select Delivery Address</h2>
          )}
          <button
            className="btn btn-brand btn-accent address-action-btn"
            onClick={() => {
              setIsEdit(false);
              setIsModalOpen((isModalOpen) => !isModalOpen);
            }}
          >
            Add New Address
          </button>
          <div className="address-container">
            {address.map((location) => (
              <React.Fragment key={location?._id}>
                {pathname === "/checkout" && (
                  <input
                    type="radio"
                    name="order-address"
                    checked={location._id === deliveryAddress?._id}
                    onChange={() => {
                      setDeliveryAddress(location);
                      navigate("/orderSummary");
                    }}
                  />
                )}
                <div className="address-card">
                  <p>{location?.name}</p>
                  <span>{location?.area}, </span>
                  <span>{location?.locality}</span>
                  <p>
                    {location?.city} , {location?.pincode} , {location?.state}
                  </p>
                  <p>{location?.mobile}</p>

                  {pathname === "/checkout" ? (
                    <button
                      className="btn btn-brand btn-accent address-action-btn"
                      onClick={() => {
                        setIsEdit(true);
                        setModalAddress(location);
                        setIsModalOpen((isModalOpen) => !isModalOpen);
                      }}
                    >
                      Edit Address
                    </button>
                  ) : (
                    <div className="address-icons">
                      <i
                        className="fas fa-edit"
                        onClick={() => {
                          setIsEdit(true);
                          setModalAddress(location);
                          setIsModalOpen((isModalOpen) => !isModalOpen);
                        }}
                      ></i>
                      <i
                        className="fas fa-trash delete-icon"
                        onClick={() =>
                          deleteAddress(location._id, dispatchUser, token)
                        }
                      ></i>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-address-container">
          {pathname === "/checkout" && (
            <h2 className="select-address">Select Delivery Address</h2>
          )}
          <h4>You do not have any Address, Add Address</h4>
          <button
            className="btn btn-brand btn-accent checkout-btn"
            onClick={() => {
              setIsEdit(false);
              setIsModalOpen((isModalOpen) => !isModalOpen);
            }}
          >
            Add New Address
          </button>
        </div>
      )}

      <AddressModal
        isEdit={isEdit}
        address={modalAddress}
        modalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export { AddressCard };
