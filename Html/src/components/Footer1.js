/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

class Footer1 extends React.Component {
  render() {
    return (

      <footer
        style={{
          flexShrink: 'none',

          height: '200px',
          position: 'relative',
          clear: 'both'
        }}
        class="py-4 bg-dark text-white-50"
      >
        
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-center text-muted">
              © 2020{' '}
              <a
                className="font-weight-bold ml-1"
                href="https://ggtech.co.in"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chakuri Platform
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-center">
              <NavItem>
                <NavLink
                  href="https://ggtech.co.in/privacy-policy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                    href="https://ggtech.co.in/about-us"
                    rel="noopener noreferrer" target="_blank"
                >
                  About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                    href="https://ggtech.co.in/contact-us"
                    rel="noopener noreferrer" target="_blank"
                >
                  Contact Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                    href="https://ggtech.co.in/our-products"
                    rel="noopener noreferrer" target="_blank"
                >
                  Products
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                    href="https://ggtech.co.in/industry"
                    rel="noopener noreferrer" target="_blank"
                >
                  Industry
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer1;
