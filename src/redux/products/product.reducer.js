import {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_COMPLETE
} from "../types.actions";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: null,
  entities: [],
  entity: null
};

export const productReducer = (
    productState = initialState,
    action = {} 
) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT_LOADING:
      return {
        isLoading: true,
        isError: false,
        isSuccess: false,
        errorMessage: null,
        entities: [],
        entity: null
      };
    case CREATE_PRODUCT_ERROR:
      return {
        isLoading: false,
        isError: true,
        isSuccess: false,
        errorMessage: payload,
        entities: [],
        entity: null
      };
    case CREATE_PRODUCT_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        isSuccess: true,
        errorMessage: null,
        entities: [...productState.entities, payload],
        entity: payload
      };
    default:
      return productState;
  }
}