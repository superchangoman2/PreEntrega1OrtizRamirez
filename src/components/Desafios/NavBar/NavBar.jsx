import {Link} from 'react-router-dom';
import {Navbar,  Container} from 'react-bootstrap';
import {NavCollapse} from '../NavCollapse/NavCollapse';

export const NavBar = () =>{
    return(
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>E-commerce Farmacia</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavCollapse/>
            </Container>
        </Navbar>
    )
}