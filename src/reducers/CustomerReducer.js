import { customers } from "mock-data/customers";

const CustomerReducer = (state = customers, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "EDIT":
      return state.map((customer) => {
        if (customer.id !== action.payload.id) {
          return customer;
        } else {
          return action.payload;
        }
      });
    default:
      return state;
  }
};

export default CustomerReducer;
