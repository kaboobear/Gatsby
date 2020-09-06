import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar,Nav,FormControl,Form,Button,Container} from "react-bootstrap"

const Header = ({ siteTitle }) => (
<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Kaboo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
