import {
  GET_ALL_CONTACT,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
} from "../constants/contact";

const initialState = {
  isLoad: false,
  contacts: [],
  isFail: false,
  contact: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_CONTACT:
      return {
        ...state,
        contacts: payload.contacts,
        isLoad: false,
        isFail: false,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload.contact,
        isLoad: false,
        isFail: false,
      };
    case GET_CONTACT_FAIL:
      return { ...state, isFail: true, isLoad: false };

    default:
      return state;
  }
};
export default contactReducer;
