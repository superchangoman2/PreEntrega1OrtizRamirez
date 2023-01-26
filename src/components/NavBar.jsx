import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Antibioticos from './Antibioticos';
import Accesorios from './Accesorios';
import Vitaminas from './Vitaminas';
import Ayuda from './Ayuda';
  
export default class NavBar extends Component {
  render() {
    return (
        <Router>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container fluid>
                <Navbar.Brand as={Link} to={"/inicio"}>E-commerce Farmacia</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to={"/inicio"}>Inicio</Nav.Link>
                    <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                    <NavDropdown title="Salud" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to={"/antibioticos"}>Antibioticos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/accesorios"}>Accesorios Médicos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to={"vitaminas"}>Vitaminas y Suplementos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/ayuda"}>Ayuda</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">🔎</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/inicio" element={<Inicio/>}></Route>
                    <Route path="/nosotros" element={<Nosotros/>}></Route>
                    <Route path="/antibioticos" element={<Antibioticos/>}></Route>
                    <Route path="/accesorios" element={<Accesorios/>}></Route>
                    <Route path="/vitaminas" element={<Vitaminas/>}></Route>
                    <Route path="/ayuda" element={<Ayuda/>}></Route>
                </Routes>
            </div>
        </Router>
    )
  }
}
