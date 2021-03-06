import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to="/"><Navbar.Brand href="#home">LifeSports</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink exact={true} to="/"><Nav.Link href="#home">Home</Nav.Link></NavLink>
                <NavLink to="/basketball"><Nav.Link href="#link">Basketball</Nav.Link></NavLink>
                <NavLink to='/playerprofile'><Nav.Link href="#link/1">Player Profile</Nav.Link></NavLink>
                <NavDropdown title="Users" id="basic-nav-dropdown">
                    <NavLink to='/boyUsers'><NavDropdown.Item href="#action/3.1">Boys</NavDropdown.Item></NavLink>
                    <NavLink to='girlUsers'><NavDropdown.Item href="#action/3.2">Girls</NavDropdown.Item></NavLink>
                    <NavDropdown.Divider />
                    <NavLink to="/user"><NavDropdown.Item href="#action/3.4">Create User</NavDropdown.Item></NavLink>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
