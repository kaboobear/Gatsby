import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Accordion,Card,Form,Button,Container,Row,Col} from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <Row>
        <Col>
          <h3>Accordeon</h3>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Business
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Business Text</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Shipping
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Shipping Text</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Form</h3>
        </Col>
      </Row>

      <Row>
        <Col>
        <Card className="p-3">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
        </Col>
      </Row>
    </Container>






  </Layout>
)

export default IndexPage
