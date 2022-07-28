import {
  GET_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
} from "../constants/userConstants";

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_ADDRESS:
    case EDIT_ADDRESS:
    case DELETE_ADDRESS:
    case ADD_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export { userReducer };
