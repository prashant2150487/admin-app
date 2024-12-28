import React from "react";
import Layout from "../../component/Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../component/Ui/Input";

const Signup = () => {
  return (
    <Layout>
      <Layout>
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      placeholder="First Name"
                      type="text"
                      label="First Name"
                      value=""
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      label="Last Name"
                      value=""
                    />
                  </Col>
                </Row>
                <Input
                  placeholder="Email"
                  label="Email address"
                  type="text"
                  value=""
                />
                <Input
                  placeholder="Password"
                  label="Password"
                  type="text"
                  value=""
                />

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </Layout>
  );
};

export default Signup;
