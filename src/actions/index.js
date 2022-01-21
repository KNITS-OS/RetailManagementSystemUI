const create = "CREATE";
const edit = "EDIT";

export const addEmployee = (employee) => {
  return {
    type: create,
    payload: employee,
  };
};

export const addGroup = (group) => {
  return {
    type: create,
    payload: group,
  };
};

export const addCustomer = (customer) => {
  return {
    type: create,
    payload: customer,
  };
};

export const editCustomer = (customer) => {
  return {
    type: edit,
    payload: customer,
  };
};
