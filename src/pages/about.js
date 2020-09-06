import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {Container,Row,Col,Card,CardColumns} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function SecondPage({data}){
  return (
    <Layout>
      <SEO title="Page two" />
      
      <Container>
        <Row>
          <Col>
            <h3>About</h3>
          </Col>
        </Row>

        <Row>
          <Col>
          <CardColumns>
            <Card>
              <Img fluid={data.one.childImageSharp.fluid} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Img fluid={data.two.childImageSharp.fluid} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Img fluid={data.three.childImageSharp.fluid} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Img fluid={data.three.childImageSharp.fluid} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Img fluid={data.one.childImageSharp.fluid} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
          </Col>
        </Row>
      </Container>


    </Layout>
  )
} 

export const query = graphql`
query {
  one: file(relativePath: { eq: "one.jpg" }) {
    childImageSharp {
      fluid(maxWidth:1100, maxHeight:600,cropFocus: CENTER, fit:COVER) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  two: file(relativePath: { eq: "two.jpg" }) {
    childImageSharp {
      fluid(maxWidth:1100, maxHeight:600,cropFocus: CENTER, fit:COVER) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  three: file(relativePath: { eq: "three.jpg" }) {
    childImageSharp {
      fluid(maxWidth:1100, maxHeight:600,cropFocus: CENTER, fit:COVER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`