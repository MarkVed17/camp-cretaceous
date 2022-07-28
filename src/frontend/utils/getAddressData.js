import axios from "axios";
import {
  GET_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
} from "../constants/userConstants";

const getAddress = async (token, dispatch) => {
  try {
    const response = await axios.get(`/api/users/address`, {
      headers: { authorization: token },
    });
    dispatch({
      type: GET_ADDRESS,
      payload: response.data.address,
    });
  } catch (error) {
    console.log(error);
  }
};

const addAddress = async (address, dispatch, token) => {
  try {
    const response = await axios.post(
      `/api/users/address/add`,
      { address },
      { headers: { authorization: token } }
    );
    dispatch({
      type: ADD_ADDRESS,
      payload: response.data.address,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteAddress = async (addressId, dispatch, token) => {
  try {
    const response = await axios.post(
      `/api/users/remove-address/${addressId}`,
      {},
      { headers: { authorization: token } }
    );
    dispatch({
      type: DELETE_ADDRESS,
      payload: response.data.address,
    });
  } catch (error) {
    console.log(error);
  }
};

const editAddress = async (addressId, address, dispatch, token) => {
  try {
    const response = await axios.post(
      `/api/users/edit-address/${addressId}`,
      { address },
      { headers: { authorization: token } }
    );
    dispatch({
      type: EDIT_ADDRESS,
      payload: response.data.address,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAddress, editAddress, deleteAddress, addAddress };
