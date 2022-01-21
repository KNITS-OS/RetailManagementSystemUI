import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
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

const CustomerPage = () => {
  const customers = useSelector((state) => state.customers);

  console.log("customer  page: ", customers);
  const history = useHistory();
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchId, setSearchId] = useState("");

  const findByCustomerDetails = () => {
    let filtters = {
      firstName: searchFirstName,
      lastName: searchLastName,
      email: searchEmail,
      id: searchId,
    };
    console.log("filter :", filtters);
  };

  const gotoCustomerPage = (e) => {
    let { id } = e.target;
    history.push(`/admin/users/customer-details/${id}`);
  };

  const removeCustomer = (e) => {
    let { id } = e.target;
    let custIndex = customers.findIndex(
      (customer) => customer.id !== parseInt(id)
    );
    console.log("customer Index :", customers[custIndex]);
    customers = customers.splice(id, 1);
    history.push("/admin/search-customer");
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={gotoCustomerPage}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="danger"
          onClick={removeCustomer}
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
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Customers</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="firstName">
                        First name:
                      </label>
                      <Input
                        id="firstNmae"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={searchFirstName}
                        onChange={(e) => setSearchFirstName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="lastName">
                        Last name:
                      </label>
                      <Input
                        id="lastName"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchLastName}
                        onChange={(e) => setSearchLastName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="email">
                        Email:
                      </label>
                      <Input
                        id="id"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="email"
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="id">
                        ID number:
                      </label>
                      <Input
                        id="id"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Id"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "29px",
                          height: "37px",
                        }}
                        className="btn btn-info"
                        type="button"
                        onClick={findByCustomerDetails}
                      >
                        Search
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Customers</h3>
              </CardHeader>
              <ToolkitProvider
                data={customers}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    sort: true,
                  },
                  {
                    dataField: "firstName",
                    text: "firstName",
                    sort: true,
                  },
                  {
                    dataField: "lastName",
                    text: "lastName",
                    sort: true,
                  },
                  {
                    dataField: "gender",
                    text: "gender",
                    sort: true,
                  },
                  // {
                  //   dataField: "birthDate",
                  //   text: "birthDate",
                  //   sort: true,
                  // },
                  {
                    dataField: "email",
                    text: "email",
                    sort: true,
                  },
                  {
                    dataField: "address",
                    text: "address",
                    sort: true,
                  },
                  // {
                  //   dataField: "postCode",
                  //   text: "postCode",
                  //   sort: true,
                  // },
                  {
                    dataField: "city",
                    text: "city",
                    sort: true,
                  },
                  {
                    dataField: "country",
                    text: "country",
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
                {(props) => (
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
                      bordered={true}
                      deletRow={true}
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

export default CustomerPage;
