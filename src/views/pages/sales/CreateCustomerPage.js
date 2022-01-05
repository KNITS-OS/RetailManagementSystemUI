import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { addCustomer } from "../../../actions";
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
function CreateCustomer() {
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.customers);
  let [firstName, setFirstName] = useState("first name");
  let [secondName, setSecondName] = useState("last name");
  let [email, setEmail] = useState("email@gmail.com");
  let [address, setAddress] = useState("address");
  let [country, setCountry] = useState("country");
  let [birthDate, setBirthDate] = useState("1990-11-14");
  let [gender, setGender] = useState("non-conforming");
  let [postCode, setPostCode] = useState("post code");
  let [city, setCity] = useState("city");
  let [id, setId] = useState(mockData.length + 1);
  const history = useHistory();

  let customer = {
    id: id,
    firstName: firstName,
    lastName: secondName,
    address: address,
    city: city,
    email: email,
    country: country,
    birthDate: birthDate,
    gender: gender,
    postCode: postCode,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    customer.id = id;
    dispatch(addCustomer(customer));
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
                    <h3 className="mb-0">Create Customer</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <h6 className="heading-small text-muted mb-4">
                    Customer information
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
                            value={customer.firstName}
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
                            value={customer.lastName}
                            type="text"
                            name="lastName"
                            onChange={(e) => setSecondName(e.target.value)}
                            onClick={(e) => clearInput(e)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
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
                            value={customer.email}
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onClick={(e) => clearInput(e)}
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
                            value={customer.birthDate}
                            type="date"
                            name="birthdayDate"
                            onChange={(e) => setBirthDate(e.target.value)}
                            onClick={(e) => clearInput(e)}
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
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Delivery information
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
                            onClick={(e) => clearInput(e)}
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
                            onClick={(e) => clearInput(e)}
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
                            onClick={(e) => clearInput(e)}
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
                            onClick={(e) => clearInput(e)}
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
                            history.push("/admin/search-customers")
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
}

export default CreateCustomer;
