import React, { Component } from "react";
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink,
  Collapse, Footer, MDBInput, MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter,
  Container, Col, Row, FormInline, 
  Modal, ModalBody, ModalFooter, ModalHeader, Button,
  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, 
  Card, CardBody, CardGroup, CardImage, CardTitle, CardText,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: "",
      modal2: false,
      modal8: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  handleChange = value => {
    console.log(value);
  };

  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? { ...product, count: val } : product
      ))
    })
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Container>
            <Row>
              <Col>
                <NavbarBrand href="/">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    height="60"
                  />{" "}
                  <strong className="black-text">Sweet Cake</strong>
                </NavbarBrand>
              </Col>
            </Row>
          </Container>

          <Navbar
            color="grey lighten-5"
            light
            expand="md"
            style={{ marginTop: "0px"}}
            fixed="top"
            scrolling
          >
            <NavbarBrand href="/">
              <img
                src="data:image/png;base64,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"
                alt=""
                height="40"
              />{"        "}
              <strong className="black-text">                 </strong>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <Collapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav left>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                    >
                    SAME DAY
                  </NavLink>
                </NavItem>       
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div>FLOWER                        
                          <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>
                      </DropdownToggle>
                      <DropdownMenu  right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>        
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div>CAKES                    
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>  
                  </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>        
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div >GIFTS                   
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>   
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>        
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div >ANNIVERSARY                
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>      
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>         
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div >PLANTS                 
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>     
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>             
                <NavItem>
                    <Dropdown>
                      <DropdownToggle nav>
                        <div >BIRTHDAY   
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
                        </div>                   
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
              </NavbarNav>

              <NavbarNav right>
                <NavItem>
                  <FormInline waves>
                    <div className="md-form my-0">
                      <input
                        className="form-control mr-sm-2 pt-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <NavLink
                      color="info" onClick={this.toggle}
                      to="#"
                    >
                      <a class="uk-navbar-toggle tm-navbar-button uk-search-icon uk-icon"
                        href="#" uk-search-icon="" aria-expanded="false">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>
                      </a>
                    </NavLink>
                  </FormInline>
                </NavItem>
                <NavItem>
                  <NavLink
                    color="info" onClick={() => this.toggle(2)}
                    to="/"
                  >
                    <a class="uk-navbar-item uk-link-muted tm-navbar-button uk-icon"
                      href="#" uk-icon="user" aria-expanded="false">
                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>
                    </a>
                  </NavLink>
                  <MDBModal
                    isOpen={this.state.modal2}
                    toggle={() => this.toggle(2)}
                    // isOpen={this.state.modal}
                    // toggle={this.toggle}
                    className="cascading-modal"
                  >
                    <div className="modal-header primary-color white-text">
                      <h4 className="title">
                        <MDBIcon className="fa fa-pencil" /> Sign In
                      </h4>
                      <button type="button" className="close" onClick={() => this.toggle(2)}>
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <MDBModalBody className="grey-text">
                      <MDBInput
                        size="sm"
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        size="sm"
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={() => this.toggle(2)}>
                        Close
                        </MDBBtn>{" "}
                      <MDBBtn color="primary">Login</MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </NavItem>
                
                <NavItem>
                  <NavLink
                    onClick={() => this.toggle(8)}
                    to="/"
                  >
                    <a class="uk-navbar-item uk-link-muted tm-navbar-button"
                      href="#" uk-toggle="target: #cart-offcanvas" onclick="return false">
                      <span uk-icon="cart" class="uk-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4"></circle> <circle cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg></span><span class="uk-badge">2</span>
                    </a>
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          {this.state.collapseID && overlay}
          <main style={{ marginTop: "0rem" }}>
            <Routes />
          </main>

          <Footer
            color="grey lighten-5"
            style={{ marginTop: "0px" }}
          >
            <p className="footer-copyright mb-0 py-3 text-center black-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="#" className="black-text"> Sweet Cake </a>
            </p>
          </Footer>

          <Row>
          <Modal
            isOpen={this.state.modal8}
            toggle={() => this.toggle(8)}
            fullHeight
            position="right"
          >
            <ModalHeader toggle={() => this.toggle(8)}>Cart</ModalHeader>
            <ModalBody>
                <CardGroup className="ml-2 mr-2">
                  <Row>
                    <Card className="mb-1">
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <CardImage
                              src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              alt="Card image cap" top hover overlay="white-slight" />
                          </Col>
                          <Col xs="7">
                            <CardText small muted >
                              <strong>Chocolate Title</strong><br />
                              Order this delicious Fresh Chocolate
                            <Row>
                                <Col xs="5"><p>$1599.00</p></Col>
                                <Col xs="7"><p>1 × $1599.00</p></Col>
                              </Row>
                            </CardText>
                          </Col>
                          <Col className="font-weight-bold red-text" xs="1">
                            X
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Row>
                  <Row>
                    <Card className="mt-1">
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <CardImage
                              src="https://img.taste.com.au/uqaR-hn1/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg"
                              alt="Card image cap" top hover overlay="white-slight" />
                          </Col>
                          <Col xs="7">
                            <CardText small muted >
                              <strong>Chocolate Title</strong><br />
                              Order this delicious Fresh Chocolate
                            <Row>
                                <Col xs="5"><p>$1599.00</p></Col>
                                <Col xs="7"><p>1 × $1599.00</p></Col>
                              </Row>
                            </CardText>
                          </Col>
                          <Col className="font-weight-bold red-text" xs="1">
                            X
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Row>
                </CardGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => this.toggle(8)}>
                Close
                </Button>
              <Button color="primary">CHECKOUT</Button>
            </ModalFooter>
          </Modal>
        </Row>

        </div>
      </Router>
    );
  }
}

export default App;
