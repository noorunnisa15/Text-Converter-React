import { ActionTypes } from "../contants/actiontypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Noor",
      category: "Frontend Developer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
      break;

    default:
      return state;
  }
};
