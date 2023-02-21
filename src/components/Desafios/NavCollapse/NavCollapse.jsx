import React from 'react'
import './NavCollapse.css';
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import { CartWidget } from "../CartWidget/CartWidget"

export const NavCollapse = () => {
  return (
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/">Inicio</NavLink>
        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/antibioticos">Antibioticos</NavLink>
        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/accesorios">Accesorios</NavLink>
        <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/productos/vitaminas">Vitaminas</NavLink>
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
        <div>
            <CartWidget/>
        </div>
    </Navbar.Collapse>
  )
}
