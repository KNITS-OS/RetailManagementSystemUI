import { employeesData } from "../mock-data/employees";
const EmployeeReducer = (state = employeesData, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default EmployeeReducer;
