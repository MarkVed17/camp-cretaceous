import React, { useState, useEffect } from "react";
import { indianStates } from "../../constants/indianStates";
import { useAuth, useUser } from "../../contexts";
import { addAddress, editAddress } from "../../utils";
import "./AddressModal.css";

const AddressModal = ({ isEdit, address, modalOpen, closeModal }) => {
  const {
    auth: { token },
  } = useAuth();

  const { dispatchUser } = useUser();

  const initialState = {
    name: isEdit ? address?.name : "",
    mobile: isEdit ? address?.mobile : "",
    area: isEdit ? address?.area : "",
    locality: isEdit ? address?.locality : "",
    pincode: isEdit ? address?.pincode : "",
    city: isEdit ? address?.city : "",
    state: isEdit ? address?.state : "",
  };

  const [addressInput, setAddressInput] = useState(initialState);

  const handleChange = (e) => {
    setAddressInput({
      ...addressInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isEdit) {
      setAddressInput(initialState);
    }
  }, [isEdit, initialState]);

  if (!modalOpen) return null;

  const submitHandler = () => {
    if (isEdit) {
      editAddress(address?._id, addressInput, dispatchUser, token);
      setAddressInput("");
    } else {
      addAddress(addressInput, dispatchUser, token);
      setAddressInput("");
    }
    closeModal();
  };

  return (
    <div className="address-modal-container">
      <form
        className="address-modal"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className="address-modal-list">
          <label className="modal-label">
            Name:
            <input
              type="text"
              name="name"
              className="input standard"
              maxLength="20"
              placeholder="Enter your Name"
              value={addressInput?.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            Mobile:
            <input
              type="text"
              name="mobile"
              className="input standard"
              minLength="10"
              maxLength="10"
              placeholder="Enter Mobile Number"
              value={addressInput?.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="address-modal-list">
          <label className="modal-label">
            Address:
            <input
              type="text"
              name="area"
              maxLength="40"
              placeholder="Enter Address"
              className="input standard"
              value={addressInput?.area}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            Locality:
            <input
              type="text"
              name="locality"
              maxLength="40"
              placeholder="Enter Locality"
              className="input standard"
              value={addressInput?.locality}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="address-modal-list">
          <label className="modal-label">
            Pincode:
            <input
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              className="input standard"
              minLength="6"
              maxLength="6"
              value={addressInput?.pincode}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            City:
            <input
              type="text"
              name="city"
              maxLength="15"
              placeholder="Enter City Name"
              className="input standard"
              value={addressInput?.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="address-modal-list">
          <label className="modal-label">
            Select State:
            <select
              className="input standard states-list"
              value={addressInput?.state}
              onChange={handleChange}
              required
              name="state"
            >
              <option disabled value="">
                Select
              </option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="address-modal-buttons">
          <button
            type="button"
            className="btn btn-outline btn-accent"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-brand btn-accent edit-address-action">
            {isEdit ? "Edit Address" : "Add Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddressModal };
