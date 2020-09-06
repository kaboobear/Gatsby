import React from "react"
import { Link } from "gatsby"
import {Container,Row,Col,Button} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacts" />

    <Container>
      <Row>
        <Col>
          <h3>Contacts</h3>
          <Button variant="primary"> <Link to="/" style={{color:"#fff", textDecoration:"none"}}>Back</Link></Button>
        </Col>
      </Row>
    </Container>

  </Layout>
)

export default SecondPage
