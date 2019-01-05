import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink,
} from "mdbreact";
import DocsLink from "./DocsLink";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapseID: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <button className="btn btn-indigo" type="submit">
                  Login
                </button>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <h2 className="mb-5 text-center">A form within a modal</h2>
            <MDBRow>
              <MDBCol size="12" className="text-center mb-5">
                <MDBBtn color="info" onClick={this.toggle}>
                  Sign In
            </MDBBtn>
                <MDBModal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className="cascading-modal"
                >
                  <div className="modal-header primary-color white-text">
                    <h4 className="title">
                      <MDBIcon className="fa fa-pencil" /> Sign In
                </h4>
                    <button type="button" className="close" onClick={this.toggle}>
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
                    <MDBBtn color="secondary" onClick={this.toggle}>
                      Close
                </MDBBtn>{" "}
                    <MDBBtn color="primary">Login</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        <h2 className="mb-5">Form register</h2>
        <MDBRow className="mt-5">
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <button className="btn btn-unique" type="submit">
                  Register
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <NavbarNav>

          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/css"
            >
              CSS
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/components"
            >
              Components
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/advanced"
            >
              Advanced
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/navigation"
            >
              Navigation
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/forms"
            >
              Forms
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/tables"
            >
              Tables
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/modals"
            >
              Modals
                  </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={this.closeCollapse("mainNavbarCollapse")}
              to="/addons"
            >
              Addons
                  </NavLink>
          </NavItem>
        </NavbarNav>
      </MDBContainer>
    );
  }
}

export default SignIn;
