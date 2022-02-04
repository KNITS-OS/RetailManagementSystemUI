import {
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_COMPLETE
} from "../types.actions";

import { createProduct } from "../../services/ProductService.js";

export const createProductAction = (productData) => async dispatch => {
  try {
    dispatch({
      type: CREATE_PRODUCT_LOADING,
      payload: CREATE_PRODUCT_LOADING
    });
    const responseData = await createProduct(productData);
    dispatch({
      type: CREATE_PRODUCT_COMPLETE,
      payload: responseData
    });
  } catch (err) {
    dispatch({
        type: CREATE_PRODUCT_ERROR,
        payload: err.message
    })
  }
}