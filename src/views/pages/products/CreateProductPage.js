/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import React, { useState } from "react";
import { useHistory } from "react-router";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export const CreateProductPage = () => {
  let [firstName, setFirstName] = useState("first name");
  const history = useHistory();

  let employee = {
    firstName: firstName,
    lastName: "",
    internationalName: "",
    title: "",
    email: "",
    businessUnit: "",
    managementGroup: "",
    companyCode: "",
    costCenter: "",
    country: "",
    birthDate: "",
    companyPhone: "",
    companyMobilePhone: "",
    gender: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "",
    officeAddressStreet: "",
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
            <Col className="order-xl-1" xl="12">
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Create product</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Product information
                    </h6>
                    <div className="pl-lg-4">
                    <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product-id"
                            >
                              Product ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product-id"
                              placeholder="Product ID"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_name"
                            >
                              Product name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_name"
                              placeholder="Product name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_brand"
                            >
                              Brand
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_brand"
                              placeholder="Brand"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Prices */}
                    <h6 className="heading-small text-muted mb-4">
                      Prices
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_cost_price"
                            >
                              Cost price
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_cost_price"
                              placeholder="Cost price"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_retail_price"
                            >
                              Retail price
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_retail_price"
                              placeholder="Retail price"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Product details */}
                    <h6 className="heading-small text-muted mb-4">
                      Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-product_category"
                            >
                              Category
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_category"
                              placeholder="Category"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-stock"
                            >
                              Stock
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-stock"
                              placeholder="Stock"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Inventory */}
                    <h6 className="heading-small text-muted mb-4">
                      Inventory
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-minimum_stock_level"
                            >
                              Minimum stock level
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-minimum_stock_level"
                              placeholder="Minimum stock level"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-reorder_quantity"
                            >
                              Reorder quantity
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-product_reorder_quantity"
                              placeholder="Reorder quantity"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="align-items-center py-4">
                      <Col lg="12" xs="7" className="text-right">
                        <Button
                          type="button"
                          color="success"
                          onClick={e => e.preventDefault()}
                        >
                          Create
                        </Button>
                        <Button
                          type="button"
                          color="info"
                          onClick={() =>
                            history.push("/admin/search-employees")
                          }
                        >
                          Back to Search
                        </Button>
                      </Col>
                    </Row>
                    </div>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

      
      
      
      </Container>
    </>
  );
};
