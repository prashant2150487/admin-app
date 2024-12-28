import React from "react";
import Layout from "../../component/Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from "../../component/Ui/Input";

const Signin = () => {
  return (
    <Layout>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
  );
};

export default Signin;
