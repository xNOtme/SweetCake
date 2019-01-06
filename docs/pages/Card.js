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

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: "",
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
      <div className="mt-5">
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
      </div>
    );
  }
}

export default Cart;
