import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          همراه موبایل
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-4">
            <Nav.Link href="#home">ثبت آگهی فروش</Nav.Link>
            <Nav.Link as={NavLink} to="/phonePrice">  
              قیمت موبایل
            </Nav.Link>
            <Nav.Link as={NavLink} to="/phoneCheck">کارشناسی موبایل</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Link to="/auth" className="btn btn-primary">
            <BsFillPersonFill className="me-1" />
            ورود
          </Link>
          <div className="ms-4 border-start ps-3">
            <FaPhoneAlt />
            <span className="ms-1">۰۹۱۲۰۵۳۲۰۲۰</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
