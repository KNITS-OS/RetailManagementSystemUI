import { groups } from "../mock-data/groups";
const GroupReducer = (state = groups, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default GroupReducer;
