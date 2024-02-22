import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';
import {Link, Route, BrowserRouter as Router, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              <NavLink to="/" activeClassName="a-active" className="nav-link">88 Days</NavLink>
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/about" activeClassName="a-active" className="nav-link">About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink  to="/settings" activeClassName="a-active" className="nav-link">Settings</NavLink>
              </Nav.Link>
            </Nav>

          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
