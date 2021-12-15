import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";

import { updateProduct, getProductsWithCategories } from '../../services/ProductService.js';

export const ToggleProductActiveStatus = ({productId, products, setProducts}) => {
  const currentProduct = products.find(product => product.id === parseInt(productId));
  
  const toggleActiveState = async (e) => {  
    try {
      const result = await updateProduct(productId, {isActive: !currentProduct.isActive});
    } catch (err) {
        console.log(err);
    }
    try {
      const getAllProducts = await getProductsWithCategories();
      setProducts(getAllProducts);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <label className="custom-toggle custom-toggle-success mr-1">
      <input
        id={productId}
        // value={currentProduct.isActive}
        type="checkbox"
        checked={currentProduct.isActive}
        onChange={toggleActiveState}
        />
      <span
        className="custom-toggle-slider rounded-circle"
        data-label-off="No"
        data-label-on="Yes"
      />
      </label>
    </>
  );
}