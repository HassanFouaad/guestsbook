import React, { useState, Fragment } from "react";
import styled from "styled-components";
import {
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  Navbar as NavbarI,
} from "reactstrap";
import { connect } from "react-redux";
import RegisterModal from "../../modals/Signup";
import { Link } from "react-router-dom";
import Login from "../../modals/Login";
import Logout from "../../modals/Logout";

export function Navbar({ auth, history }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const authLinks = (
    <Fragment>
      <NavItem>
        <Logout></Logout>
      </NavItem>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <Login></Login>
      </NavItem>
    </Fragment>
  );

  return (
    <NavWrapper>
      <NavbarI dark expand="sm">
        <div className="container">
          <NavbarBrand className="nav-brand" style={{ color: "white" }}>
            GuestBook
          </NavbarBrand>

          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              {auth && auth.isAuthenticated && auth.user
                ? authLinks
                : guestLinks}
            </Nav>
          </Collapse>
        </div>
      </NavbarI>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: var(--primaryColor);
  color: var(--mainWhite) !important;
  .toggler {
    color: var(--mainWhite) !important;
  }
  .nav-link {
    background: var(--primaryColor);
    color: var(--mainWhite) !important;
  }
`;
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Navbar);
