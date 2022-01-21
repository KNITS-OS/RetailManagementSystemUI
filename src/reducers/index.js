import EmployeeReducer from "./EmployeeReducer";
import GroupReducer from "./GroupReducer";
import CustomerReducer from "./CustomerReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  employees: EmployeeReducer,
  groups: GroupReducer,
  customers: CustomerReducer,
});

export default allReducers;
