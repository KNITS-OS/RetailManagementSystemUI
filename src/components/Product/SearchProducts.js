// reactstrap components
import { React, useEffect, useState } from 'react';
import { getProductsWithCategories, searchByParamsWithCategories, getCategories } from 'services/ProductService.js';
import "assets/vendor/nucleo/css/nucleo.css";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row
} from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const SearchProducts = ({products, setProducts}) => {
  const [productCategoriesOptions, setProductCategoriesOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
  }, []); 

  const getAllCategories = async () => {
    try {
        const result  = await getCategories();
        const listProductCategoriesOptions = result.map(category => {
          return {
            value: category.id,
            label: category.title
          }
        });
        setProductCategoriesOptions([{ value: 0, label: "---"}, ...listProductCategoriesOptions]);
        setCategories(result);
    } catch (err) {
        console.log(err);
    }
  }

  const stockOptions = [
    { value: 0, label: "---"},
    { value: true, label: "In Stock"},
    { value: false, label: "Out of Stock"}
  ];

  const [advancedSearchView, setAdvancedSearchView] = useState(false);
  const [searchProductId, setSearchProductId] = useState('');
  const [searchSku, setSearchSku] = useState('');
  const [searchProductName, setSearchProductName] = useState('');
  const [isProductInStock, setIsProductInStock] = useState(null);
  const [searchCategory, setProductCategory] = useState(null);
  const [searchBrand, setProductBrand] = useState('');

  const filterToQueryString = (filterParam) => {
      return (filterParam.value || typeof filterParam.value === 'boolean') ?
          ((filterParam.name === 'stock' || filterParam.name === 'id') ?
          `${filterParam.name}=${encodeURIComponent(filterParam.value)}` :
          `${filterParam.name}_like=${encodeURIComponent(filterParam.value)}`) :
          '';
    }
    
  const findByAllParameters = async (event) => {
    event.preventDefault();
    let searchParamsString = '';
    const filters = [
      { name: "id", value: searchProductId },
      { name: "sku", value: searchSku },
      { name: "product_name", value: searchProductName },
      { name: "stock", value: isProductInStock },
      { name: "product_category", value: searchCategory },
      { name: "product_brand", value: searchBrand }
    ];
    filters.forEach(filterParam => {
        if (filterParam.value || typeof filterParam.value === 'boolean') {
          searchParamsString += `&${filterToQueryString(filterParam)}`;
        }
    });
    try {
      if (searchParamsString.length) {
        const result = await searchByParamsWithCategories(searchParamsString.slice(1));
        setProducts(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clearSearchCriteria = async () => {
    try {
        const result = await getProductsWithCategories();
        setProducts(result);
        setSearchProductId('');
        setSearchSku('');
        setSearchProductName('');
        setIsProductInStock(null);
        setProductCategory(null);
        setProductBrand('');
        setAdvancedSearchView(false);
    } catch (err) {
        console.log(err);
    }
}

  return (
    <>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Products</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Form onSubmit={findByAllParameters}>
                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productId"
                        >
                          Product ID
                        </label>
                        <Input
                          id="productId"
                          style={{ height: "36px" }}
                          className="form-control"
                          type="text"
                          placeholder="ID"
                          value={searchProductId}
                          onChange={e => setSearchProductId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productName"
                        >
                          Product name
                        </label>
                        <Input
                          id="productName"
                          style={{ height: "36px" }}
                          className="form-control"
                          type="text"
                          placeholder="Product Name"
                          value={searchProductName}
                          onChange={e => setSearchProductName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="7">
                      <div className="d-flex">
                      <FormGroup>
                        <button
                          style={{
                            marginTop: "32px",
                            height: "40px",
                          }}
                          className="btn btn-info"
                          type="submit"
                        >
                          Search
                        </button>
                      </FormGroup>
                      <FormGroup>
                        <button
                          style={{
                            marginTop: "32px",
                            marginLeft: "8px",
                            height: "40px",
                          }}
                          className="btn btn-info"
                          type="button"
                          onClick={clearSearchCriteria}
                        >
                          Clear
                        </button>
                      </FormGroup>
                      <FormGroup className="ml-auto">
                        <button
                          style={{
                            marginTop: "32px",
                            height: "40px",
                          }}
                          className="btn-icon btn btn-info"
                          type="button"
                          onClick={() => setAdvancedSearchView(!advancedSearchView)}
                        >
                          <span className="btn-inner--text mr-1">Advanced search</span>
                          { !advancedSearchView &&
                            <span className="btn-inner--icon">
                              <i className="ni ni-bold-down"></i>
                            </span>  
                          }
                          { advancedSearchView &&
                            <span className="btn-inner--icon mr-1">
                              <i className="ni ni-bold-up"></i>
                            </span>  
                          }
                        </button>
                      </FormGroup>

                      </div>
                    </Col>
                  </Row>
                  {
                    advancedSearchView && 
                    <Row>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="productId"
                          >
                            Product SKU
                          </label>
                          <Input
                            id="productId"
                            style={{ height: "36px" }}
                            className="form-control"
                            type="text"
                            placeholder="SKU"
                            value={searchSku}
                            onChange={e => setSearchSku(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="productBrand"
                          >
                            Product brand
                          </label>
                          <Input
                            id="productBrand"
                            style={{ height: "36px" }}
                            className="form-control"
                            type="text"
                            placeholder="Product Brand"
                            value={searchBrand}
                            onChange={e => setProductBrand(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="isProductInStock"
                          >
                            In Stock
                          </label>
                          <Select
                            id="isProductInStock"
                            components={makeAnimated()}
                            options={stockOptions}
                            onChange={item =>
                              setIsProductInStock(item.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="productCategories"
                          >
                            Categories
                          </label>
                          <Select
                            id="productCategories"
                            components={makeAnimated()}
                            options={productCategoriesOptions}
                            onChange={item => setProductCategory(item.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  }
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>

        {/* <Row>
            <Col className="order-xl-1 my-4" xl="8">
                <Card className="bg-default shadow">
                    <CardBody>
                        <Form onSubmit={onSearchSubmit} className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <FormGroup className="mb-0">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-search" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    className="form-control-alternative"
                                    placeholder="Search product"
                                    type="text"
                                    value={searchId}
                                    onChange={onChangeSearchId} 
                                />
                            </InputGroup>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row> */}
    </>
  );
};

