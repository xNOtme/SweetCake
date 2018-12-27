import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputSelect,
  Button,
  Modal,
  ModalBody,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle, Collapse,
  CardText, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem, MDBCardHeader, MDBCardFooter, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBCardGroup, MDBJumbotron
} from "mdbreact";
import DocsLink from "./DocsLink";
const NavLink = require("react-router-dom").NavLink;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggleCollapse(collapseID) {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleChange = value => {
    console.log(value);
  };

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6">
            <p className="h4 text-left mb-4">Photo Cake</p>
            <img src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="img-fluid" alt="Responsive image"></img>
          </MDBCol>
          <MDBCol md="1" />
          <MDBCol md="5">
            <p className="h4 text-left mb-4">BELGIUM CHOCOLATE PHOTO CAKE</p>
            <p className="h6 text-left mb-6">Price</p>
            <p className="h6 text-left text-warning mb-6">₹910.00</p>
            <p className="h6 text-left mb-6">Order this delicious Fresh Chocolate Photo Cake for someone special on any special occasion</p>
            <p className="h6 text-left mb-6">- Midnight home delivery available on same day</p>
            <p className="h6 text-left mb-6">- No extra charges</p>
            <p className="h6 text-left mb-6">- Guarantee to melt your heart with it's taste.</p>

            <form className="was-validated" noValidate>
              <h4 className="mt-6">Size</h4>
              <div className="form-group">
                <select className="custom-select browser-default" required>
                  <option value="">Select</option>
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
                <div className="invalid-feedback">
                  Select Size to add to Cart
                </div>
              </div>
            </form>
            <form>
              <h4 className="mt-4">Qty</h4>
              <MDBRow>
                <MDBCol sm="4">
                  <MDBInputSelect
                    getValue={this.handleChange}
                    min={1}
                    max={99}
                    value={1}
                    className="mb-2"
                  />
                </MDBCol>
              </MDBRow>
              {/* <NavLink
                tag="button"
                className="btn btn-warning"
                to="/cartpage"
              >
                Add To Cart
                </NavLink> */}
              <Button color="warning" onClick={() => this.toggleCollapse("basicCollapse")}>Add To Cart</Button>
              <button type="button" class="btn btn-light">Add To Wish List</button>
            </form>
          </MDBCol>
          <MDBRow>
            <Collapse id="basicCollapse" isOpen={this.state.collapseID}>
              <MDBCard className="text-center">
                <MDBCardHeader>
                  <MDBNav header>
                    <MDBNavItem>
                      <MDBNavLink active to="#">
                        Shopping cart
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCardHeader>

                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="3">
                      <MDBCardTitle tag="h5">Chocolate Photo Cake</MDBCardTitle>
                      <CardImage
                        src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="Card image cap" top hover overlay="white-slight" />
                    </MDBCol>
                    <MDBCol md="4">
                      <p className="h6 text-left mb-6">Quantity:</p>
                      <p className="h6 text-left mb-6">Price:</p>
                      <p className="h6 text-left text-warning mb-6">Total:</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>

              </MDBCard>
            </Collapse>
          </MDBRow>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProductPage;
