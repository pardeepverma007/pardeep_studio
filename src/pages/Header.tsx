import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaUserCircle, FaBell, FaVideo, FaBars } from 'react-icons/fa';
import { BASE_URL } from '../constant/index';
import { useSelector } from 'react-redux'

const Header = () => {
    const user: any = useSelector<any>(state => state.user)
    console.log(user.avatar, "avatar")
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <FaBars className="me-3" />
                        <img
                            src={`${BASE_URL}img/logo.png`}
                            alt="YouTube Logo"
                            height="30"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Form className="d-flex mx-auto w-50">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="#"><FaVideo /></Nav.Link>
                            <Nav.Link href="#"><FaBell /></Nav.Link>
                            <Nav.Link href="#">
                                {user?.avatar ? <img src={user?.avatar}
                                    style={{ width: "30px", borderRadius: "50%" }} alt="sdasdasdhga" /> :
                                    <FaUserCircle size={30} />}

                            </Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header