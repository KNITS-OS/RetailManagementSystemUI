// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { categoriesData } from "mock-data/categories.js";
import { employeesData as employees } from "mock-data/employees.js";
import { React, useEffect, useState } from 'react';
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactDatetime from "react-datetime";
import { useHistory } from "react-router";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { getProducts } from 'services/ProductService.js'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { pagination } from "utils/tableUtils";

const { SearchBar } = Search;

export const ProductsPage = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);

  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = async () => {
      try {
          const result = await getProducts();
          setProducts(result.data);
          console.log(result.data);
      } catch (err) {
          console.log(err);
      }
  }


  const getBusinessUnits = categoriesData.businessUnits.map(
    businessUnit => {
      return { value: businessUnit.id, label: businessUnit.name };
    },
  );

  const getCountries = categoriesData.countryListAllIsoData.map(
    country => {
      return { value: country.code, label: country.name };
    },
  );

  const findByAllParameters = () => {
    let filters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnit,
      countryIsoCode3: searchCountry,
      hiringDate: searchHiringDate,
    };
    console.log("filters: ", filters);
  };

  const goToProductDetails = e => {
    const { id } = e.target;
    history.push(`/admin/products/products-details/${id}`);
  };

  const removeProduct = e => {
    var { id } = e.target;
    let empIndex = employees.findIndex(emp => emp.id !== parseInt(id));
    console.log(employees[empIndex]);
    console.log(employees.length);
    employees = employees.splice(id, 1);
    console.log(employees.length);
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={goToProductDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={removeProduct}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        {/* <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Employees</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchLastName}
                        onChange={e => setSearchLastName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="businessUnits"
                      >
                        Business Units
                      </label>
                      <Select
                        id="businessUnits"
                        components={makeAnimated()}
                        options={getBusinessUnits}
                        onChange={item =>
                          setSearchBusinessUnit(item.value)
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="country"
                      >
                        Countries
                      </label>
                      <Select
                        id="country"
                        components={makeAnimated()}
                        options={getCountries}
                        onChange={item => setSearchCountry(item.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Hire Date From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={dateAsMoment =>
                          setSearchHiringDate(
                            dateAsMoment.format("D-MM-YYYY"),
                          )
                        }
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row> */}

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Products</h3>
                <p className="text-sm mb-0">Products</p>
              </CardHeader>
              <ToolkitProvider
                data={products}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "product_name",
                    text: "Product name",
                    sort: true,
                  },
                  {
                    dataField: "product_brand",
                    text: "Product brand",
                    sort: true,
                  },
                  {
                    dataField: "sku",
                    text: "SKU",
                    sort: true,
                  },
                  {
                    dataField: "product_category",
                    text: "Product category",
                    sort: true,
                  },
                  {
                    dataField: "product_cost_price",
                    text: "product_cost_price",
                    sort: true,
                  },
                  {
                    dataField: "product_retail_price",
                    text: "product_retail_price",
                    sort: true,
                  },
                  {
                    dataField: "isActive",
                    text: "isActive",
                    sort: true,
                  },
                  {
                    dataField: "stock",
                    text: "Stock",
                    sort: true,
                  },
                  {
                    dataField: "minimum_stock_level",
                    text: "MIN Stock :evel",
                    sort: true,
                  },
                  {
                    dataField: "reorder_quantity",
                    text: "Reorder quantity",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      deleteRow={true}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
