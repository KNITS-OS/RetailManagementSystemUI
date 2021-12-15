// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import * as Yup from 'yup';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from "react";
import { useHistory } from "react-router";
import classnames from "classnames";
import { InputComponent } from '../../../components/Product/InputComponent.js';
import { SelectComponent } from '../../../components/Product/SelectComponent.js';
import ReactDatetime from "react-datetime";
import moment from 'moment';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane
} from "reactstrap";

import "assets/css/products.css";
import { brands, categories, types, conditions, seasons, statuses, suppliers } from '../../../mock-data/productMocks.js'

import { createProduct } from 'services/ProductService.js';

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

  const validationSchema = Yup.object().shape({
    product_name: Yup.string().required('Product name is required'),
    product_brand: Yup.number().positive().required(),
    product_type: Yup.number().positive().required(),
    product_category: Yup.number().positive().required(),
    upc: Yup.string().matches(/^([0-9]{12})$/, { excludeEmptyString: true}),
    isbn: Yup.string().matches(/^([0-9]{10}|[0-9]{13})$/, { excludeEmptyString: true}),
    description: Yup.string(),
    sku: Yup.string().matches(/^([a-zA-Z0-9-_/\s]{32})$/, { excludeEmptyString: true}),
    status: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    ean: Yup.string().matches(/^([0-9]{8}|[0-9]{13}|[0-9]{14})$/, { excludeEmptyString: true}),
    mpn: Yup.string().matches(/^([a-zA-Z0-9])$/, { excludeEmptyString: true}),
    barcode: Yup.string(),
    condition: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    season: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    recyclable_packaging: Yup.bool(),
    expiration_date: Yup.date().nullable().transform(value => (value instanceof Date && !isNaN(value) ? value : null)),
    weight: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    height: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    width: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    length: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    volume: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    available_quantity: Yup.number().min(1).required('Specify available quantity'),
    minimum_stock_level: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    reorder_quantity: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value),
    default_location: Yup.string(),
    overflow_location: Yup.string(),
    suppliers: Yup.number().positive().nullable(true).transform(value => isNaN(value) ? null : value)
  })

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ 
    resolver: yupResolver(validationSchema),
    defaultValues: initialProductState
  });

  const [tabs, setTabs] = useState(1);
  const yesterdayDate = moment().subtract(1, 'day');
  const validDate = current => current.isAfter(yesterdayDate);

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setTabs(index);
  }

  const saveProduct = async (event) => {
    event.preventDefault();
    let data = {};
    try {
      const result = await createProduct(data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
}
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Nav
              className="nav-fill flex-column flex-md-row mb-2"
              id="product__tabs"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={tabs === 1}
                  className={
                    classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 1
                    })
                  }
                  onClick={e => toggleNavs(e, "tabs", 1)}
                  role="tab"
                  href="#info"
                >
                  Product information
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={tabs === 2}
                  className={
                    classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 2
                    })
                  }
                  onClick={e => toggleNavs(e, "tabs", 2)}
                  role="tab"
                  href="#stock"
                >
                  Stock/Inventory
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={tabs === 3}
                  className={
                    classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 3
                    })
                  }
                  onClick={e => toggleNavs(e, "tabs", 3)}
                  role="tab"
                  href="#prices"
                >
                  Prices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={tabs === 4}
                  className={
                    classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 4
                    })
                  }
                  onClick={e => toggleNavs(e, "tabs", 4)}
                  role="tab"
                  href="#suppliers"
                >
                  Suppliers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={tabs === 5}
                  className={
                    classnames("mb-sm-3 mb-md-0", {
                      active: tabs === 5
                    })
                  }
                  onClick={e => toggleNavs(e, "tabs", 5)}
                  role="tab"
                  href="#bundle"
                >
                  Bundle
                </NavLink>
              </NavItem>
            </Nav>
            <Card>
              <CardBody>
                <TabContent activeTab={"tabs" + tabs}>
                  <TabPane tabId="tabs1">
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Mandatory Product information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <Controller
                              name="product_name"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Product name"
                                  inputPlaceholder = "Product name"
                                  inputName = "product_name"
                                  inputId = "product_name"
                                  inputField = {field}
                                  errors = {errors}
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="6">
                            <Controller
                              name="sku"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "SKU"
                                  inputPlaceholder = "SKU"
                                  inputName = "sku"
                                  inputId = "sku"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='SKU should be 32 symbols. Only digits, numbers and -, _ and space are allowed.'
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                        </Row>
                        <Row>  
                          <Col lg="4">
                            <Controller
                              name="product_brand"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Brand"
                                  inputId = "product_brand"
                                  inputName = "product_brand"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {brands}
                                  customErrorMsg = 'Select Product Brand'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="product_category"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Category"
                                  inputId = "product_category"
                                  inputName = "product_category"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {categories}
                                  customErrorMsg = 'Select Product Category'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="product_type"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Category"
                                  inputId = "product_type"
                                  inputName = "product_type"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {types}
                                  customErrorMsg = 'Select Product Type'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                        </Row>
                      </div>  
                      <h6 className="heading-small text-muted mb-4">
                        Additional Product information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="3">
                            <Controller
                              name="upc"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "UPC"
                                  inputPlaceholder = "UPC"
                                  inputId = "upc"
                                  inputName = "upc"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='UPC should be 12 digits'
                                  >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="3">
                            <Controller
                              name="isbn"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "ISBN"
                                  inputPlaceholder = "ISBN"
                                  inputId = "isbn"
                                  inputName = "isbn"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='ISBN should be 10 or 13 digits'
                                  >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="3">
                            <Controller
                              name="ean"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "EAN"
                                  inputPlaceholder = "EAN"
                                  inputName = "ean"
                                  inputId = "ean"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='EAN should be 8, 13 or 14 digits'
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="3">
                            <Controller
                              name="mpn"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "MPN"
                                  inputPlaceholder = "MPN"
                                  inputName = "mpn"
                                  inputId = "mpn"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='MPN can contain only letters and numbers'
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <Controller
                              name="barcode"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Barcode"
                                  inputPlaceholder = "Barcode"
                                  inputName = "barcode"
                                  inputId = "barcode"
                                  inputField = {field}
                                  errors = {errors}
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="condition"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Condition"
                                  inputId = "condition"
                                  inputName = "condition"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {conditions}
                                  customErrorMsg = 'Select Product Condition'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="season"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Season"
                                  inputId = "season"
                                  inputName = "season"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {seasons}
                                  customErrorMsg = 'Select Season'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="3">
                            <Controller
                              name="expiration_date"
                              control={control}
                              render={({ field }) => 
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="weight"
                                  >
                                   Set an Expiration date 
                                  </label>
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-calendar-grid-58" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <ReactDatetime
                                      className={`form-control-alternative ${errors['expiration_date'] ? 'is-invalid' : ''}`}
                                      id="expiration-date"
                                      inputProps={{
                                        placeholder: "Click to select the date",
                                        readOnly: true
                                      }}
                                      dateFormat={"DD/MM/YYYY"}
                                      timeFormat={false}
                                      isValidDate= { validDate }
                                      name="expiration_date"
                                      {...field}
                                    />                
                                  </InputGroup>
                                </FormGroup>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => 
                                  <SelectComponent
                                    inputLabel = "Status"
                                    inputId = "status"
                                    inputName = "status"
                                    inputType="select"
                                    inputField = {field}
                                    errors = {errors}
                                    options = {statuses}
                                    customErrorMsg = 'Select Product Status'
                                  >
                                  </SelectComponent>
                                }
                              />
                          </Col>
                          <Col lg="2">
                            <Controller
                              name="recyclable_packaging"
                              control={control}
                              render={({ field }) => 
                                <FormGroup className="text-center">
                                  <label
                                      className="form-control-label"
                                      htmlFor="recyclable_packaging"
                                  >
                                    Recyclable packaging
                                  </label>
                                  <label className="custom-toggle custom-toggle-success d-block mx-auto mt-2">
                                    <input
                                      id="recyclable_packaging"
                                      type="checkbox"
                                      name="recyclable_packaging"
                                      {...field}
                                      />
                                    <span
                                      className="custom-toggle-slider rounded-circle"
                                      data-label-off="No"
                                      data-label-on="Yes"
                                    />
                                  </label>
                              </FormGroup> 
                              }
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <Controller
                              name="description"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Description"
                                  inputPlaceholder = "Description"
                                  inputType="textarea"
                                  inputName = "description"
                                  inputId = "description"
                                  inputField = {field}
                                  errors = {errors}
                                >
                                </InputComponent>
                              }
                            />
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tabId="tabs2">
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Quantities
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="4">
                            <Controller
                              name="available_quantity"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Available quantity"
                                  inputPlaceholder = "0"
                                  inputType="number"
                                  inputId = "available_quantity"
                                  inputName = "available_quantity"
                                  inputField = {field}
                                  errors = {errors}
                                  customErrorMsg='Available quantity should be greater than 0'
                                >
                              </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="minimum_stock_level"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Minimum stock level"
                                  inputPlaceholder = "0"
                                  inputType="number"
                                  inputId = "minimum_stock_level"
                                  inputName = "minimum_stock_level"
                                  inputField = {field}
                                  errors = {errors}
                                  >
                                </InputComponent>
                              }
                            />
                          </Col>
                          <Col lg="4">
                            <Controller
                              name="reorder_quantity"
                              control={control}
                              render={({ field }) => 
                                <InputComponent
                                  inputLabel = "Reorder quantity"
                                  inputPlaceholder = "0"
                                  inputType="number"
                                  inputId = "reorder_quantity"
                                  inputName = "reorder_quantity"
                                  inputField = {field}
                                  errors = {errors}
                                  >
                                </InputComponent>
                              }
                            />
                          </Col>
                        </Row>
                      </div>  
                      <h6 className="heading-small text-muted mb-4">
                        Dimensions
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="2">
                            <Controller
                              name="weight"
                              control={control}
                              render={({ field }) => 
                              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="weight"
                              >
                                Weight
                              </label>
                                <InputGroup
                                  className="input-group-merge form-control-alternative"
                                >
                                  <Input
                                    {...field}
                                    className={`${errors['weight'] ? 'is-invalid' : ''}`}
                                    placeholder="0"
                                    type="number"
                                  />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                      <small className="font-weight-bold">KG</small>
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <div className="invalid-feedback">
                                    Weight should be greater than 0
                                  </div>
                                </InputGroup>
                              </FormGroup>
                              }
                            />
                          </Col>
                          <Col lg="2">
                            <Controller
                              name="volume"
                              control={control}
                              render={({ field }) => 
                              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="volume"
                              >
                                Volume
                              </label>
                                <InputGroup
                                  className="input-group-merge form-control-alternative"
                                >
                                  <Input
                                    {...field}
                                    className={`${errors['volume'] ? 'is-invalid' : ''}`}
                                    placeholder="0"
                                    type="number"
                                  />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                      <small className="font-weight-bold">CM<sup>3</sup></small>
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <div className="invalid-feedback">
                                    Volume should be greater than 0
                                  </div>
                                </InputGroup>
                              </FormGroup>
                              }
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="2">
                            <Controller
                              name="height"
                              control={control}
                              render={({ field }) => 
                              <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="height"
                              >
                                Height
                              </label>
                                <InputGroup
                                  className="input-group-merge form-control-alternative"
                                >
                                  <Input
                                    {...field}
                                    className={`${errors['height'] ? 'is-invalid' : ''}`}
                                    placeholder="0"
                                    type="number"
                                  />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                      <small className="font-weight-bold">CM</small>
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <div className="invalid-feedback">
                                    Height should be greater than 0
                                  </div>
                                </InputGroup>
                              </FormGroup>
                              }
                            />
                          </Col>
                          <Col lg="2">
                            <Controller
                              name="width"
                              control={control}
                              render={({ field }) => 
                                <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="width"
                                >
                                  Width
                                </label>
                                  <InputGroup
                                    className="input-group-merge form-control-alternative"
                                  >
                                    <Input
                                      {...field}
                                      className={`${errors['width'] ? 'is-invalid' : ''}`}
                                      placeholder="0"
                                      type="number"
                                    />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <small className="font-weight-bold">CM</small>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <div className="invalid-feedback">
                                      Width should be greater than 0
                                    </div>
                                  </InputGroup>
                                </FormGroup>
                              }
                            />
                          </Col>
                          <Col lg="2">
                            <Controller
                              name="length"
                              control={control}
                              render={({ field }) => 
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="length"
                                  >
                                    Length
                                  </label>
                                    <InputGroup
                                      className="input-group-merge form-control-alternative"
                                    >
                                      <Input
                                        {...field}
                                        className={`${errors['length'] ? 'is-invalid' : ''}`}
                                        placeholder="0"
                                        type="number"
                                      />
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                          <small className="font-weight-bold">CM</small>
                                        </InputGroupText>
                                      </InputGroupAddon>
                                      <div className="invalid-feedback">
                                        Length should be greater than 0
                                      </div>
                                    </InputGroup>
                                </FormGroup>
                              }
                            />
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tabId="tabs3">
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Prices
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-price_list"
                              >
                                Price lists
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-price_list"
                                placeholder="Price lists"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-volume_discounts"
                              >
                                Volume discounts
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-volume_discounts"
                                placeholder="Volume discounts"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tabId="tabs4">
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Suppliers
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="8">
                            <Controller
                              name="suppliers"
                              control={control}
                              render={({ field }) => 
                                <SelectComponent
                                  inputLabel = "Select suppliers"
                                  inputId = "suppliers"
                                  inputName = "suppliers"
                                  inputType="select"
                                  inputField = {field}
                                  errors = {errors}
                                  options = {suppliers}
                                  customErrorMsg = 'Select supplier'
                                >
                                </SelectComponent>
                              }
                            />
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </TabPane>
                  <TabPane tabId="tabs5">
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        Bundle
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-bundle"
                              >
                                Bundle
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-bundle"
                                placeholder="Bundle"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                    </TabPane> 
                </TabContent>
                <Row className="align-items-center py-4">
                  <Col lg="12" className="text-right">
                    <Button
                      type="submit"
                      color="success"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Create
                    </Button>
                    <Button
                      type="button"
                      color="info"
                      onClick={() =>
                        history.push("/admin/search-products")
                      }
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>  
        </Row>
      </Container>
    </>
  );
};
