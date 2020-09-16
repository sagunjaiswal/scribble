import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{
            backgroundColor: "#d7c1e0",
            fontFamily: "Akronim, cursive",
            fontSize: "bolder",
          }}
          dark
          expand="sm"
          className="mb-5"
        >
          <Container>
            <NavbarBrand href="/">
              <img width="50px" height="50px" src="../../public/favicon.png" />
              SCRIBBLE(notes-app)
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://github.com/sagunjaiswal">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
