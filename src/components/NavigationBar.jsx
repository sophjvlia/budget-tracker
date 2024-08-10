import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../contexts/AuthContext';
import ThemeContext from '../contexts/ThemeContext';

export default function NavigationBar() {
  const theme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = theme === 'light' ? 'dark' : 'light';
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    authContext.setToken(null);
    navigate('/login');
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between w-100 m-0 px-4 py-2">
        <Navbar.Brand href="#home">Sophie's Budget Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setTheme(updatedTheme)}>
                Toggle theme
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}