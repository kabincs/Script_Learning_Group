import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import ls from 'local-storage';
// import { Button } from '@material-ui/core';

class Header extends React.Component {
  render() {
    let loginlogout;
    if (ls.get('token') && ls.get('token') !== '') {
      loginlogout = (
        <UncontrolledDropdown nav>
          <NavLink
            className="nav-link-icon mt-2"
            // to="/login"
            tag={Link}
            aria-expanded={false}
            aria-haspopup={true}
            data-toggle="dropdown"
            id="navbar-primary_dropdown_1"
          >
            <span style={spanStyle} className="nav-link-inner--text">
              Profile
            </span>
          </NavLink>
          <DropdownMenu aria-labelledby="navbar-primary_dropdown_1" right>
            {/* <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Edit Profile -tahap pengembangan-
            </DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/logout">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      loginlogout = (
        <NavLink className="nav-link-icon mt-2" to="/login" tag={Link}>
          <i className="ni ni-planet" />
                  <span style={spanStyle} className="nav-link-inner--text">
                    Login
                  </span>
        </NavLink>
      );
    }


    let signup;
    if (ls.get('token') && ls.get('token') !== '') {
      signup = <span></span>;
    } else {
      signup = (
        <NavLink className="nav-link-icon" to="/register" tag={Link}>
          <Button color="info" type="button">
            Register
          </Button>
        </NavLink>
      );
    }

    let job_seeker;
    if (ls.get('token') && ls.get('token') !== '') {
      job_seeker = <span></span>;
    } else {
      job_seeker = (
        <NavLink className="nav-link-icon mt-2" to="/jobseeker" tag={Link}>
          <i className="ni ni-planet" />
                  <span style={spanStyle} className="nav-link-inner--text">
                    JobSeeker
                  </span>
        </NavLink>
      );
    }

    return (
      <Navbar
        style={navbarStyle}
        className="navbar-horizontal navbar-dark bg-blue-500 navbar-fixed-top"
        expand="md"
      >
        <Container>
          <NavbarBrand tag={Link} to="/Footer1" style={spanStyle}>
            CHAKURI
          </NavbarBrand>

          <NavbarBrand tag={Link} to="/job_recommend" style={spanStyle}>
            Jobs
          </NavbarBrand>

          <button
            aria-controls="navbar-primary"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-primary"
            data-toggle="collapse"
            id="navbar-primary"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      // src={require('assets/img/brand/blue.png')}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-primary"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-primary"
                    data-toggle="collapse"
                    id="navbar-primary"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon mt-2" to="/" tag={Link}>
                  <i className="ni ni-planet" />
                  <span style={spanStyle} className="nav-link-inner--text">
                    Dashboard
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>{loginlogout}</NavItem>
              {job_seeker}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    );
  }
}
const navbarStyle = {
  padding: '0px 20px',
  position: 'overflow',
  top: '0px',
  left: '0px'
};
const spanStyle = {
  fontSize: '16px',
  color: '#424242'
};

export default Header;
