import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link><Link className='inicio' to="/">🏠Home</Link></Nav.Link>
            <Nav.Link><Link className='contacto' to="/contacto">📒Contacto</Link></Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#home">Happy Cake 🍰</Navbar.Brand>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;