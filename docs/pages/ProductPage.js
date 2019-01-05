import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBInputSelect, Button,
  Modal, ModalBody, ModalFooter, ModalHeader,
  Card, CardBody, CardGroup, CardImage, CardTitle,
  Collapse, Col, Row,
  CardText, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem,
  MDBCardHeader, MDBCardFooter, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBCardGroup, MDBJumbotron
} from "mdbreact";
import DocsLink from "./DocsLink";
const NavLink = require("react-router-dom").NavLink;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: "",
      modal: false,
      modal8: false,
      products: [
        { title: 'Apple', count: 0, price: 910 },
        { title: 'IBM', count: 0, price: 200 },
        { title: 'HP', count: 0, price: 300 },
      ],
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

  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? { ...product, count: val } : product
      ))
    })
  }

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
            <p className="h6 text-left text-warning mb-6">$1599.00</p>
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
              <h4 className="mt-4">Quantity</h4>
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
              <Button color="warning" onClick={() => this.toggleCollapse("basicCollapse")}>Add To Cart</Button>
              <button type="button" onClick={() => this.toggle(8)} class="btn btn-light" >Add To Wish List</button>
            </form>
          </MDBCol>

          <MDBRow>
            <Modal
              isOpen={this.state.modal8}
              toggle={() => this.toggle(8)}
              fullHeight
              position="right"
            >
              <ModalHeader toggle={() => this.toggle(8)}>Cart</ModalHeader>
              <ModalBody>
                <MDBRow>
                  <CardGroup className="ml-2 mr-2">
                    <Card>
                      <CardBody>
                        <MDBRow>
                          <MDBCol xs="4">
                            <CardImage
                              src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                              alt="Card image cap" top hover overlay="white-slight" />
                          </MDBCol>
                          <MDBCol xs="7">
                            <CardText small muted >
                            <strong>Chocolate Title</strong><br/>
                            Order this delicious Fresh Chocolate
                            <Row>
                              <Col xs="5"><p>$1599.00</p></Col>
                              <Col xs="7"><p>1 × $1599.00</p></Col>
                            </Row>
                            </CardText>
                          </MDBCol>
                          <MDBCol className="font-weight-bold red-text" xs="1">
                            X
                          </MDBCol>
                        </MDBRow>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </MDBRow>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.toggle(8)}>
                  Close
            </Button>
                <Button color="primary">CHECKOUT</Button>
              </ModalFooter>
            </Modal>
          </MDBRow>

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
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="4" className="mx-auto ml-4 mt-4">
                      <MDBRow className="mt-4">
                        <MDBCol md="6">
                          <p className="h6 text-left mt-4">Quantity:</p>
                        </MDBCol>
                        <MDBCol md="6">
                          <p className="h6 text-left mt-4">1</p>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="6">
                          <p className="h6 text-left mt-4">Price:</p>
                        </MDBCol>
                        <MDBCol md="6">
                          <p className="h6 text-left mt-4">₹910.00</p>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="6">
                          <p className="h6 text-left text-warning mt-4">Total:</p>
                        </MDBCol>
                        <MDBCol md="6">
                          <p className="h6 text-left text-warning mt-4">₹910.00</p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="mx-auto mt-4">
                      <Button className="mt-3 btn-sm" color="warning" onClick={() => this.toggleCollapse("basicCollapse")}>Remove</Button>
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

const ProductList = ({ products, onChange }) => (
  <ul>
    {products.map((product, i) => (
      <li key={i}>
        {product.title}
        <input
          type="text"
          value={product.count}
          onChange={e => onChange(i, parseInt(e.target.value) || 0)}
        />
      </li>
    ))}
  </ul>
);

const Total = ({ products }) => (
  <h4>
    Price:
    {products.reduce((sum, i) => (
      sum += i.count * i.price
    ), 0)}
  </h4>
)

const Tong = ({ getValue }) => (
  <h4>
    Price:
    {getValue.reduce((sum, i) => (
      sum += i.value
    ), 0)}
  </h4>
)

export default ProductPage;
