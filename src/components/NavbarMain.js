import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import abletonlogo from '../assets/abletonlogo.png';

function NavbarMain() {
    return (
        <>
            <Container fluid>
                <Navbar collapseOnSelect expand='lg' className='mx-4' bg="light" data-bs-theme="light">
                    <Navbar.Brand href="#home">
                        <img
                            src={abletonlogo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar' />
                    <Navbar.Collapse id='responsive-navbar'>
                        <Nav className="me-auto">
                            <Nav.Link href="#live">Live</Nav.Link>
                            <Nav.Link href="#push">Push</Nav.Link>
                            <Nav.Link href="#note">Note</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#packs">Packs</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                            <Nav.Link href="#more+">More +</Nav.Link>
                        </Nav>
                        <div className='container fluid'>
                            <div className='row-3 g-3 justify-content-end'>
                                <Navbar.Text className='col-3'>
                                    <a  href="#login">Try Live 12 for Free</a>
                                </Navbar.Text>
                                <Navbar.Text className='col-2'>
                                    <a href="#login">Log in or Register</a>
                                </Navbar.Text>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>  
    );
}

export default NavbarMain;