// reactstrap components
import { React, useEffect, useState } from 'react';
import { getProducts } from 'services/ProductService.js'

import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

export const SearchProduct = (props) => {
    const [products, setProducts] = useState([]);
    const [searchId, setSearchId] = useState('');
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

    const onChangeSearchId = ($event) => {
        const searchId = $event.target.value;
        setSearchId(searchId);
    }

    const onSearchSubmit = async ($event) => {
        try {
            $event.preventDefault();
            console.log(searchId);
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <>
        <Row>
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
        </Row>
    </>
  );
};

