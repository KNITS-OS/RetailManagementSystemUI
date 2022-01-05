import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { editCustomer } from "actions";

const CustomerDetailsPage = () => {
  const history = useHistory();
  let { id } = useParams();

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  console.log("customer detail : ", customers);
  let customer = customers.find((customer) => customer.id === parseInt(id));

  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [birthDate, setBirthDate] = useState(customer.birthDate);
  const [gender, setGender] = useState(customer.gender);
  const [email, setEmail] = useState(customer.email);
  const [address, setAddress] = useState(customer.address);
  const [city, setCity] = useState(customer.city);
  const [postCode, setPostCode] = useState(customer.postCode);
  const [country, setCountry] = useState(customer.country);
  const [customerId, setCustomerId] = useState(customer.id);
  const [isActive, setIsActive] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState(
    customer.deliveryAddress
  );
  const [deliveryPhone, setDeliveryPhone] = useState(customer.deliveryPhone);
  const [deliveryCity, setDeliveryCity] = useState(customer.deliveryCity);
  const [deliveryPostCode, setDeliveryPostCode] = useState(
    customer.deliveryPostCode
  );
  const [deliveryCountry, setDeliveryCountry] = useState(
    customer.deliveryCountry
  );

  let customerWithNewDetails = {
    id: customerId,
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    gender: gender,
    email: email,
    address: address,
    city: city,
    postCode: postCode,
    country: country,
    isActive: isActive,
    deliveryAddress: deliveryAddress,
    deliveryPhone: deliveryPhone,
    deliveryPostCode: deliveryPostCode,
    deliveryCity: deliveryCity,
    deliveryCountry: deliveryCountry,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new details :", customerWithNewDetails); // customer with new details on log
    dispatch(editCustomer(customerWithNewDetails));
    history.push("/admin/search-customer");
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
                    <h3 className="mb-0">Customer Details</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <h6 className="heading-small text-muted mb-2">
                    Custtomer information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={firstName}
                            type="text"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={lastName}
                            type="text"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-gender"
                          >
                            Gender
                          </label>
                          <Input
                            id="input-gender"
                            value={gender}
                            type="select"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="male">
                              Male (including transgender men)
                            </option>
                            <option value="female">
                              Female (including transgender women)
                            </option>
                            <option value="non-conforming">
                              Non-conforming
                            </option>
                          </Input>
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
                            value={email}
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-birthdaydate"
                          >
                            Birthday date
                          </label>
                          <Input
                            id="input-birthdaydate"
                            value={birthDate}
                            type="date"
                            name="birthdayDate"
                            onChange={(e) => setBirthDate(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-2" />

                  <h6 className="heading-small text-muted mb-2">
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
                            Address
                          </label>
                          <Input
                            placeholder="Primary Address"
                            id="input-address"
                            value={address}
                            type="text"
                            name="Primary address"
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-postCode"
                          >
                            Post Code
                          </label>
                          <Input
                            placeholder="postCode"
                            id="input-postCode"
                            value={postCode}
                            type="text"
                            name="postCode"
                            onChange={(e) => setPostCode(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            placeholder="City"
                            id="input-city"
                            value={city}
                            type="text"
                            name="city"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            placeholder="country"
                            id="input-country"
                            value={country}
                            type="text"
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-2" />
                  <h6 className="heading-small text-muted mb-2">
                    Delivery Address
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            placeholder="Delivery Address"
                            id="input-deliveryAddress"
                            type="text"
                            name="deliverAddress"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phoneNum"
                          >
                            Phone Number:
                          </label>
                          <Input
                            placeholder="Phone Number"
                            id="input-phoneNumber"
                            type="text"
                            name="phoneNumber"
                            value={deliveryPhone}
                            onChange={(e) => setDeliveryPhone(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-postCode"
                          >
                            Post Code
                          </label>
                          <Input
                            placeholder="postCode"
                            id="input-postCode"
                            value={deliveryPostCode}
                            type="text"
                            name="postCode"
                            onChange={(e) =>
                              setDeliveryPostCode(e.target.value)
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            placeholder="City"
                            id="input-city"
                            value={deliveryCity}
                            type="text"
                            name="city"
                            onChange={(e) => setDeliveryCity(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            placeholder="country"
                            id="input-country"
                            type="text"
                            name="country"
                            value={deliveryCountry}
                            onChange={(e) => setDeliveryCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="align-items-center py-3">
                      <Col lg="12" xs="7" className="text-right">
                        <Button type="submit" color="success">
                          Edit
                        </Button>
                        <Button
                          type="button"
                          color="info"
                          onClick={() => history.push("/admin/search-customer")}
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
export default CustomerDetailsPage;
