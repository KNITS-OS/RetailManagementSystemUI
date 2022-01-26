// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { EditProductPanel } from '../products/EditProductPanel';
import { getProduct } from '../../../services/ProductService';
import { useParams } from "react-router-dom";


// reactstrap components
import { Container } from "reactstrap";
import "assets/css/products.css";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProductDetailsPage = () => {
  const history = useHistory();
  let { id } = useParams();

  const dispatch = useDispatch();
  const productState = useSelector(state => state.product);
  const [alert, setAlert] = useState(productState.isError);
  const [product, setProduct] = useState(productState.entity);

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    setProduct(productState.entity);
  }, [productState.entity]);

  const getProductById = async (id) => {
    try {
        const result = await getProduct(id);
        // setProduct(result[0]);
    } catch (err) {
        console.log(err);
    }
  }

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

  const updateProduct = product => {
    //dispatch(createProductAction(product));
    console.log(product);
  }

  useEffect(() => {
    if (productState.entity) {
      setAlert(
        <SweetAlert
          success
          title="Success"
          onConfirm={() => setAlert(false)}
        >
          Product updated!
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
          product && (
            <EditProductPanel
              product={product}
              setProduct={setProduct}
              onSubmit={updateProduct}
              productState={productState}
            />
          )
        }
      </Container>
    </>
  );
};
