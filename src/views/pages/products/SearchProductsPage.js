// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { React, useEffect, useState } from 'react';
import { SearchProducts } from "components/Product/SearchProducts.js";
import { ProductsList } from "components/Product/ProductsList.js";

import { getProductsWithCategories, getCategories } from 'services/ProductService.js'
// reactstrap components
import {
  Container
} from "reactstrap";

export const SearchProductsPage = () => {
  const [products, setProducts] = useState([]);

  let categories = [];

  useEffect(() => {
    getAllCategories()
  }, []); 

  const getAllCategories = async () => {
    try {
        categories = await getCategories();
    } catch (err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = async () => {
      try {
        const productsWithCategories = await getProductsWithCategories();
          setProducts(productsWithCategories);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <SearchProducts products={products} setProducts={setProducts}/>
        <ProductsList products={products} setProducts={setProducts}/>
      </Container>
    </>
  );
};
