import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">همراه موبایل</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ثبت آگهی فروش</Nav.Link>
            <Nav.Link href="#link">خرید موبایل</Nav.Link>
            <Nav.Link href="#link۲">کارشناسی موبایل</Nav.Link>
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
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-primary">
              <BsFillPersonFill className="me-1" />
              ورود
            </button>
            <div className="ms-4 border-start ps-3">
              <FaPhoneAlt />
              <span className="ms-1" >۰۹۱۲۰۵۳۲۰۲۰</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
