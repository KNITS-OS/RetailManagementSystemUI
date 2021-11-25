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
import React, { useState } from "react";

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

const CreateRolePage = () => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "100px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />
      </div>

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Role</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Role information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-role-name"
                          >
                            Role Name
                          </label>
                          <Input
                            name="name"
                            value={roleName}
                            required
                            id="input-role-name"
                            placeholder="Role name"
                            type="text"
                            onChange={(e) => setRoleName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="description"
                          >
                            Role Description (optional)
                          </label>
                          <Input
                            name="description"
                            id="description"
                            placeholder="Role decription"
                            rows="4"
                            type="textarea"
                            onChange={(e) => setRoleDescription(e.target.value)}
                            alue={roleDescription}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="align-items-center py-4">
                      <Col lg="12" xs="7" className="text-right">
                        <Button
                          type="button"
                          color="success"
                          onClick={() =>
                            console.log(
                              `Role name: ${roleName}, Role description: ${roleDescription}`
                            )
                          }
                        >
                          Create
                        </Button>
                        <Button
                          type="button"
                          color="warning"
                          onClick={(e) => e.preventDefault()}
                        >
                          Cancel
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

export default CreateRolePage;
