import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBInputSelect, Button,
  Modal, ModalBody, ModalFooter, ModalHeader,
  Card, CardBody, CardGroup, CardImage, CardTitle,
  Collapse, Col, Row, View,
  CardText, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBListGroup, MDBListGroupItem,
  MDBCardHeader, MDBCardFooter, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBCardGroup, MDBJumbotron,  
  Carousel, CarouselCaption, CarouselInner, CarouselItem,
} from "mdbreact";
import DocsLink from "./DocsLink";
import Cart from "./Card";
const NavLink = require("react-router-dom").NavLink;

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: "",
      modal: false,
      modal8: false,
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
            <div>
          <Carousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <CarouselInner>
              <CarouselItem itemId="1">
                <View>
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="First slide"
                  />
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive"> </h3>
                  <p> </p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="2">
                <View>
                  <img
                    className="img-fluid"
                    src="https://img.taste.com.au/uqaR-hn1/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg"
                    alt="Second slide"
                  />
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive"> </h3>
                  <p> </p>
                </CarouselCaption>
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </div>

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
              <Button color="warning" onClick={() => this.toggle(8)}>Add To Cart</Button>
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
              <div>
                <Row>
                  <Col xs="1"></Col>
                  <Col xs="5"><h5><strong>Subtotal</strong></h5></Col>
                  <Col xs="5"><h5><strong>$3599.00</strong></h5></Col>
                </Row>
                <Button color="secondary" onClick={() => this.toggle(8)}>
                  View CART
                </Button>
                <Button color="primary">CHECKOUT</Button>
              </div>
            </ModalFooter>
          </Modal>
          </MDBRow>          
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProductPage;
