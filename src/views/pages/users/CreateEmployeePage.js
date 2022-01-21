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
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../../actions";
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
const CreateEmployeePage = () => {
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.employees);
  let [firstName, setFirstName] = useState("first name");
  let [secondName, setSecondName] = useState("second name");
  let [internationalName, setInternationalName] =
    useState("international name");
  let [email, setEmail] = useState("email@gmail.com");
  let [address, setAddress] = useState("address");
  let [title, setTitle] = useState("title");
  let [businessUnit, setbusinessUnit] = useState("business unit");
  let [managementGroup, setmanagementGroup] = useState("management group");
  let [country, setCountry] = useState("country");
  let [birthDate, setBirthDate] = useState("1990-11-14");
  let [companyPhone, setCompanyPhone] = useState("company Phone");
  let [companyMobilePhone, setCompanyMobilePhone] = useState("+372 4362165");
  let [gender, setGender] = useState("non-conforming");
  let [nationality, setNationality] = useState("nationality");
  let [officeAddressCountry, setOfficeAddressCountry] = useState("Estonia");
  let [officeAddressCity, setOfficeAddressCity] = useState("Tallinn");
  let [officeAddressStreet, setOfficeAddressStreet] = useState("Lõõtsa 2A");
  let [postCode, setPostCode] = useState("post code");
  let [city, setCity] = useState("city");
  let [id, setId] = useState(mockData.length + 1);
  let [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  let employee = {
    id: id,
    firstName: firstName,
    lastName: secondName,
    internationalName: internationalName,
    title: title,
    address: address,
    city: city,
    email: email,
    businessUnit: businessUnit,
    managementGroup: managementGroup,
    country: country,
    birthDate: birthDate,
    companyPhone: companyPhone,
    companyMobilePhone: companyMobilePhone,
    gender: gender,
    nationality: nationality,
    officeAddressCountry: officeAddressCountry,
    officeAddressCity: officeAddressCity,
    officeAddressStreet: officeAddressStreet,
    postCode: postCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    employee.id = id;
    dispatch(addEmployee(employee));
    setSubmitted(true);
  };
  const clearInput = (e) => {
    e.target.value = "";
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
                    <h3 className="mb-0">Create Employee</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={employee.firstName}
                            type="text"
                            name="name"
                            onChange={(e) => setFirstName(e.target.value)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={employee.lastName}
                            type="text"
                            name="lastName"
                            onChange={(e) => setSecondName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            International Name
                          </label>
                          <Input
                            id="input-username"
                            value={employee.internationalName}
                            type="text"
                            name="internationalName"
                            onChange={(e) =>
                              setInternationalName(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            id="input-email"
                            value={employee.email}
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-birthdaydate"
                          >
                            Birthday date
                          </label>
                          <Input
                            id="input-birthdaydate"
                            value={employee.birthDate}
                            type="date"
                            name="birthdayDate"
                            onChange={(e) => setBirthDate(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Example select
                          </label>
                          <Input
                            id="exampleFormControlSelect1"
                            type="select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value={"male"}>
                              Male (including transgender men)
                            </option>
                            <option value={"female"}>
                              Female (including transgender women)
                            </option>
                            <option value={"non-conforming"}>
                              Non-conforming
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-nationality"
                          >
                            Nationality
                          </label>
                          <Input
                            id="input-nationality"
                            value={employee.nationality}
                            type="text"
                            name="nationality"
                            onChange={(e) => setNationality(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Street
                          </label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            name="street"
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                            name="city"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            Postal code
                          </label>
                          <Input
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            name="postalCode"
                            onChange={(e) => setPostCode(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company Data
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="title">
                            Title
                          </label>
                          <Input
                            id="title"
                            value={employee.title}
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="companyPhone"
                          >
                            Company Phone
                          </label>
                          <Input
                            id="companyPhone"
                            value="+372 77645322"
                            type="text"
                            name="companyPhone"
                            onChange={(e) => setCompanyPhone(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-company-mobile-phone"
                          >
                            Company Mobile Phone
                          </label>
                          <Input
                            id="input-company-mobile-phone"
                            value={employee.companyMobilePhone}
                            type="tel"
                            onChange={(e) =>
                              setCompanyMobilePhone(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-business-unit"
                          >
                            Business Unit
                          </label>
                          <Input
                            id="input-business-unit"
                            value={employee.businessUnit}
                            type="text"
                            name="companyBusinessUnit"
                            onChange={(e) => setbusinessUnit(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-managment-group"
                          >
                            Management Group
                          </label>
                          <Input
                            id="input-managment-group"
                            value={employee.managementGroup}
                            type="text"
                            name="companyManagementGroup"
                            onChange={(e) => setmanagementGroup(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-company-country"
                          >
                            Country
                          </label>
                          <Input
                            id="input-company-country"
                            value={employee.officeAddressCountry}
                            type="text"
                            name="companyCountry"
                            onChange={(e) =>
                              setOfficeAddressCountry(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-company-city"
                          >
                            City
                          </label>
                          <Input
                            id="input-company-city"
                            value={employee.officeAddressCity}
                            type="text"
                            name="companyCity"
                            onChange={(e) =>
                              setOfficeAddressCity(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="8">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-company-street"
                          >
                            Street
                          </label>
                          <Input
                            id="input-company-street"
                            value={employee.officeAddressStreet}
                            type="text"
                            name="companyStreet"
                            onChange={(e) =>
                              setOfficeAddressStreet(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="align-items-center py-4">
                      <Col lg="12" xs="7" className="text-right">
                        <Button type="submit" color="success">
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

export default CreateEmployeePage;
