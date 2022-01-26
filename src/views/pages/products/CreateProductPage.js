// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { EditProductPanel } from '../products/EditProductPanel';

// reactstrap components
import { Container } from "reactstrap";

import "assets/css/products.css";

import { createProductAction } from 'redux/products/product.actions';
import SweetAlert from "react-bootstrap-sweetalert";

export const CreateProductPage = () => {
  const history = useHistory();
  const initialProductState = {
    "id": null,
    "product_name": "",
    "description": "",
    "sku": "",
    "product_brand": "",
    "product_type": "",
    "product_category": "",
    "status:": "",
    "upc": "",
    "isbn": "",
    "ean": "",
    "mpn": "",
    "barcode": "",
    "condition": "",
    "season": "",
    "recyclable_packaging": false,
    "expiration_date": "",
    "weight": "",
    "height": "",
    "width": "",
    "length": "",
    "volume": "",
    "available_quantity": "",
    "minimum_stock_level": "",
    "reorder_quantity": "",
    "default_location": "",
    "overflow_location": "",
    "suppliers": "",
    // "bundle": [],
    // "price_list": [],
    // "volume_discounts": [] 
  }
  const dispatch = useDispatch();
  const productState = useSelector(state => state.product);
  const [alert, setAlert] = useState(productState.isError);
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productState.isError) {
      setAlert(
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => setAlert(false)}
        >
          {productState.errorMessage}
        </SweetAlert>
      );
    }
  }, [productState.isError, productState.errorMessage]);

  const createProduct = product => {
    dispatch(createProductAction(product));
    setSubmitted(true);
  }

  useEffect(() => {
    if (productState.entity && submitted) {
      setAlert(
        <SweetAlert
          success
          title="Success"
          showCancel
          confirmBtnText="Create more"
          cancelBtnText="Back to Search"
          onConfirm={() => {
            setAlert(false);
            setSubmitted(false);
            setProduct(initialProductState);
          }}
          onCancel={() => {
            setAlert(false);
            setSubmitted(false);
            history.push("/admin/search-products")
          }}
        >
          Product created!
        </SweetAlert>
      );
    }
  }, [productState.entity])

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        {
          product && !submitted && (
            <EditProductPanel
              product={product}
              setProduct={setProduct}
              onSubmit={createProduct}
              productState={productState}
            />
          )
        }
      </Container>
    </>
  );
};
