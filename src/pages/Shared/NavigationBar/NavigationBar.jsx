import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary text-danger" bg="light" data-bs-theme="light" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                < FaUserCircle style={{ fontSize: '2rem' }} />
                            }
                            {user ?
                                <Button onClick={handleLogOut} variant='danger'>Logout</Button> :
                                <Link to='/login'>
                                    <Button variant='primary' >Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;