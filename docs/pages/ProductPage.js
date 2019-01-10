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
      collapseID: "",
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

closeCollapse = collapseID => () =>
  this.state.collapseID === collapseID && this.setState({ collapseID: "" });

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

          <div>
              <hr className="my-4"></hr>
              <h2 className="text-center my-4 font-weight-bold">Best Selling Products</h2>
              <CardGroup deck className="mt-3" >
                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/styles/main_product_image/public/rosy-delight-9988790cb-A.jpg?itok=VGU5gl52"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Rosy Delight</CardTitle>
                      <CardText>
                      </CardText>
                      <Row>
                        <Col className="mt-2" xs="6">
                          $1599.00
                      </Col>
                        <Col xs="6">
                          <Row>
                            <Col className="mt-2" xs="4">
                              <NavLink
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc0LjY0NCw3NC4yN0M0NDkuMzkxLDQ1LjYxNiw0MTQuMzU4LDI5LjgzNiwzNzYsMjkuODM2Yy01My45NDgsMC04OC4xMDMsMzIuMjItMTA3LjI1NSw1OS4yNSAgICBjLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1ICAgIGMtMzguMzU4LDAtNzMuMzkxLDE1Ljc4MS05OC42NDUsNDQuNDM1QzEzLjI2NywxMDEuNjA1LDAsMTM4LjIxMywwLDE3Ny4zNTFjMCw0Mi42MDMsMTYuNjMzLDgyLjIyOCw1Mi4zNDUsMTI0LjcgICAgYzMxLjkxNywzNy45Niw3Ny44MzQsNzcuMDg4LDEzMS4wMDUsMTIyLjM5N2MxOS44MTMsMTYuODg0LDQwLjMwMiwzNC4zNDQsNjIuMTE1LDUzLjQyOWwwLjY1NSwwLjU3NCAgICBjMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxICAgIGM1My4xNjgtNDUuMzA2LDk5LjA4NS04NC40MzQsMTMxLjAwMi0xMjIuMzk1QzQ5NS4zNjcsMjU5LjU3OCw1MTIsMjE5Ljk1NCw1MTIsMTc3LjM1MSAgICBDNTEyLDEzOC4yMTMsNDk4LjczMywxMDEuNjA1LDQ3NC42NDQsNzQuMjd6IE0zMDkuMTkzLDQwMS42MTRjLTE3LjA4LDE0LjU1NC0zNC42NTgsMjkuNTMzLTUzLjE5Myw0NS42NDYgICAgYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUgICAgQzc5LjM0LDcyLjAwNywxMDYuMzc5LDU5LjgzNiwxMzYsNTkuODM2YzQxLjEyOSwwLDY3LjcxNiwyNS4zMzgsODIuNzc2LDQ2LjU5NGMxMy41MDksMTkuMDY0LDIwLjU1OCwzOC4yODIsMjIuOTYyLDQ1LjY1OSAgICBjMi4wMTEsNi4xNzUsNy43NjgsMTAuMzU0LDE0LjI2MiwxMC4zNTRjNi40OTQsMCwxMi4yNTEtNC4xNzksMTQuMjYyLTEwLjM1NGMyLjQwNC03LjM3Nyw5LjQ1My0yNi41OTUsMjIuOTYyLTQ1LjY2ICAgIGMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxICAgIEM0ODIsMjU0LjM1OCw0MTMuMjU1LDMxMi45MzksMzA5LjE5Myw0MDEuNjE0eiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="20"
                                />
                              </NavLink>
                            </Col>
                            <Col xs="4">
                              <NavLink
                                onClick={() => this.toggle(8)}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjAxMyA1OS4wMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5LjAxMyA1OS4wMTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQjk3RDM7IiBkPSJNMTUsMzkuMDA2bC01LjE2Ny0yNkg1OHYyMi4wMTJjMCwyLjIwMi0xLjc4NSwzLjk4OC0zLjk4OCwzLjk4OEgxNSIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik01Ny4zMDYsMjguOTIzbC05LjM2Niw5LjM2NWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgICBjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsOS4zNjYtOS4zNjVjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCAgICBTNTcuNjk2LDI4LjUzMyw1Ny4zMDYsMjguOTIzeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTguNzIsMTcuNjA5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDM2LjYyMywzOC4yOTJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgQzM2LjgxOCwzOS45MDIsMzcuMDc0LDQwLDM3LjMzLDQwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDU4LjcyLDE5LjAyM0M1OS4xMSwxOC42MzIsNTkuMTEsMTgsNTguNzIsMTcuNjA5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTIuNzI3LDEyLjI4OWMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwyNS4zMDUsMzguMjk1Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wyNi4wMDgtMjYuMDA3QzUzLjExNywxMy4zMTIsNTMuMTE3LDEyLjY3OSw1Mi43MjcsMTIuMjg5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzAuMDk0LDEyLjI5NGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwxMi4zNjcsMjguNjA3Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxNi4zMTMtMTYuMzEzQzMwLjQ4NCwxMy4zMTgsMzAuNDg0LDEyLjY4NSwzMC4wOTQsMTIuMjk0eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNDEuNDEsMTIuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDE1LjYxNSwzNi42NzJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDQxLjQxLDEzLjcwNkM0MS44MDEsMTMuMzE1LDQxLjgwMSwxMi42ODIsNDEuNDEsMTIuMjkyeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTguNzc2LDEyLjI5N2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMGwtNi44NzEsNi44NzFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzbDYuODcxLTYuODcxQzE5LjE2NywxMy4zMjEsMTkuMTY3LDEyLjY4OCwxOC43NzYsMTIuMjk3eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NC4wMTMsNDAuMDA2SDE0LjE3OWwtNS41NjQtMjhINTl2MjMuMDEzQzU5LDM3Ljc2OSw1Ni43NjMsNDAuMDA2LDU0LjAxMyw0MC4wMDZ6IE0xNS44MjEsMzguMDA2ICAgaDM4LjE5MWMxLjY0NywwLDIuOTg3LTEuMzQsMi45ODctMi45ODdWMTQuMDA2SDExLjA1MkwxNS44MjEsMzguMDA2eiIvPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjIyIiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0yMiw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTMjUuMzA5LDU0LjAwNiwyMiw1NC4wMDZ6IE0yMiw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzI0LjIwNiw0NC4wMDYsMjIsNDQuMDA2eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjQ1IiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik00NSw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTNDguMzA5LDU0LjAwNiw0NSw1NC4wMDZ6IE00NSw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzQ3LjIwNiw0NC4wMDYsNDUsNDQuMDA2eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NSw0OC4wMDZoLTUuMTAxYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xSDU1YzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTNTUuNTUzLDQ4LjAwNiw1NSw0OC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTQwLjEwMSw0OC4wMDZIMjYuODk5Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDEzLjIwMWMwLjU1MywwLDEsMC40NDcsMSwxICAgUzQwLjY1Myw0OC4wMDYsNDAuMTAxLDQ4LjAwNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNOS44MzIsMTQuMDA2Yy0wLjQ4LDAtMC45MDQtMC4zNDctMC45ODUtMC44MzZMOC4xNTIsOS4wMDZINmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMSAgIGgzLjg0OGwwLjk3Miw1LjgzNmMwLjA5MSwwLjU0NS0wLjI3NywxLjA2LTAuODIyLDEuMTVDOS45NDEsMTQuMDAyLDkuODg3LDE0LjAwNiw5LjgzMiwxNC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTE3LjEwMSw0OC4wMDZIMTRjLTEuNDA2LDAtMi43NTgtMC42MDMtMy43MDctMS42NTJjLTAuOTQ3LTEuMDQ3LTEuNDA5LTIuNDUzLTEuMjY4LTMuODU4ICAgYzAuMjU1LTIuNTE4LDIuNTIyLTQuNDg5LDUuMTYzLTQuNDg5YzAuNTUzLDAsMSwwLjQ0NywxLDFzLTAuNDQ3LDEtMSwxYy0xLjYyNywwLTMuMDIxLDEuMTgyLTMuMTczLDIuNjkgICBjLTAuMDg3LDAuODU1LDAuMTg0LDEuNjc4LDAuNzYxLDIuMzE2YzAuNTcxLDAuNjMxLDEuMzgyLDAuOTkzLDIuMjI0LDAuOTkzaDMuMTAxYzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTMTcuNjUzLDQ4LjAwNiwxNy4xMDEsNDguMDA2eiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTY0QzNDOyIgY3g9IjMiIGN5PSI4LjAwNiIgcj0iMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="40"
                                />
                              </NavLink>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </NavLink>
                </Card>

                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/styles/main_product_image/public/Black-forest-cake-1-Kg-A.jpg?itok=vJPr4r9B"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Choco Black Forest</CardTitle>
                      <CardText>
                      </CardText>
                      <Row>
                        <Col className="mt-2" xs="6">
                          $1599.00
                      </Col>
                        <Col xs="6">
                          <Row>
                            <Col className="mt-2" xs="4">
                              <NavLink
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc0LjY0NCw3NC4yN0M0NDkuMzkxLDQ1LjYxNiw0MTQuMzU4LDI5LjgzNiwzNzYsMjkuODM2Yy01My45NDgsMC04OC4xMDMsMzIuMjItMTA3LjI1NSw1OS4yNSAgICBjLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1ICAgIGMtMzguMzU4LDAtNzMuMzkxLDE1Ljc4MS05OC42NDUsNDQuNDM1QzEzLjI2NywxMDEuNjA1LDAsMTM4LjIxMywwLDE3Ny4zNTFjMCw0Mi42MDMsMTYuNjMzLDgyLjIyOCw1Mi4zNDUsMTI0LjcgICAgYzMxLjkxNywzNy45Niw3Ny44MzQsNzcuMDg4LDEzMS4wMDUsMTIyLjM5N2MxOS44MTMsMTYuODg0LDQwLjMwMiwzNC4zNDQsNjIuMTE1LDUzLjQyOWwwLjY1NSwwLjU3NCAgICBjMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxICAgIGM1My4xNjgtNDUuMzA2LDk5LjA4NS04NC40MzQsMTMxLjAwMi0xMjIuMzk1QzQ5NS4zNjcsMjU5LjU3OCw1MTIsMjE5Ljk1NCw1MTIsMTc3LjM1MSAgICBDNTEyLDEzOC4yMTMsNDk4LjczMywxMDEuNjA1LDQ3NC42NDQsNzQuMjd6IE0zMDkuMTkzLDQwMS42MTRjLTE3LjA4LDE0LjU1NC0zNC42NTgsMjkuNTMzLTUzLjE5Myw0NS42NDYgICAgYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUgICAgQzc5LjM0LDcyLjAwNywxMDYuMzc5LDU5LjgzNiwxMzYsNTkuODM2YzQxLjEyOSwwLDY3LjcxNiwyNS4zMzgsODIuNzc2LDQ2LjU5NGMxMy41MDksMTkuMDY0LDIwLjU1OCwzOC4yODIsMjIuOTYyLDQ1LjY1OSAgICBjMi4wMTEsNi4xNzUsNy43NjgsMTAuMzU0LDE0LjI2MiwxMC4zNTRjNi40OTQsMCwxMi4yNTEtNC4xNzksMTQuMjYyLTEwLjM1NGMyLjQwNC03LjM3Nyw5LjQ1My0yNi41OTUsMjIuOTYyLTQ1LjY2ICAgIGMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxICAgIEM0ODIsMjU0LjM1OCw0MTMuMjU1LDMxMi45MzksMzA5LjE5Myw0MDEuNjE0eiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="20"
                                />
                              </NavLink>
                            </Col>
                            <Col xs="4">
                              <NavLink
                                onClick={() => this.toggle(8)}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjAxMyA1OS4wMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5LjAxMyA1OS4wMTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQjk3RDM7IiBkPSJNMTUsMzkuMDA2bC01LjE2Ny0yNkg1OHYyMi4wMTJjMCwyLjIwMi0xLjc4NSwzLjk4OC0zLjk4OCwzLjk4OEgxNSIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik01Ny4zMDYsMjguOTIzbC05LjM2Niw5LjM2NWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgICBjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsOS4zNjYtOS4zNjVjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCAgICBTNTcuNjk2LDI4LjUzMyw1Ny4zMDYsMjguOTIzeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTguNzIsMTcuNjA5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDM2LjYyMywzOC4yOTJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgQzM2LjgxOCwzOS45MDIsMzcuMDc0LDQwLDM3LjMzLDQwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDU4LjcyLDE5LjAyM0M1OS4xMSwxOC42MzIsNTkuMTEsMTgsNTguNzIsMTcuNjA5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTIuNzI3LDEyLjI4OWMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwyNS4zMDUsMzguMjk1Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wyNi4wMDgtMjYuMDA3QzUzLjExNywxMy4zMTIsNTMuMTE3LDEyLjY3OSw1Mi43MjcsMTIuMjg5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzAuMDk0LDEyLjI5NGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwxMi4zNjcsMjguNjA3Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxNi4zMTMtMTYuMzEzQzMwLjQ4NCwxMy4zMTgsMzAuNDg0LDEyLjY4NSwzMC4wOTQsMTIuMjk0eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNDEuNDEsMTIuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDE1LjYxNSwzNi42NzJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDQxLjQxLDEzLjcwNkM0MS44MDEsMTMuMzE1LDQxLjgwMSwxMi42ODIsNDEuNDEsMTIuMjkyeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTguNzc2LDEyLjI5N2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMGwtNi44NzEsNi44NzFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzbDYuODcxLTYuODcxQzE5LjE2NywxMy4zMjEsMTkuMTY3LDEyLjY4OCwxOC43NzYsMTIuMjk3eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NC4wMTMsNDAuMDA2SDE0LjE3OWwtNS41NjQtMjhINTl2MjMuMDEzQzU5LDM3Ljc2OSw1Ni43NjMsNDAuMDA2LDU0LjAxMyw0MC4wMDZ6IE0xNS44MjEsMzguMDA2ICAgaDM4LjE5MWMxLjY0NywwLDIuOTg3LTEuMzQsMi45ODctMi45ODdWMTQuMDA2SDExLjA1MkwxNS44MjEsMzguMDA2eiIvPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjIyIiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0yMiw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTMjUuMzA5LDU0LjAwNiwyMiw1NC4wMDZ6IE0yMiw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzI0LjIwNiw0NC4wMDYsMjIsNDQuMDA2eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjQ1IiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik00NSw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTNDguMzA5LDU0LjAwNiw0NSw1NC4wMDZ6IE00NSw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzQ3LjIwNiw0NC4wMDYsNDUsNDQuMDA2eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NSw0OC4wMDZoLTUuMTAxYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xSDU1YzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTNTUuNTUzLDQ4LjAwNiw1NSw0OC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTQwLjEwMSw0OC4wMDZIMjYuODk5Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDEzLjIwMWMwLjU1MywwLDEsMC40NDcsMSwxICAgUzQwLjY1Myw0OC4wMDYsNDAuMTAxLDQ4LjAwNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNOS44MzIsMTQuMDA2Yy0wLjQ4LDAtMC45MDQtMC4zNDctMC45ODUtMC44MzZMOC4xNTIsOS4wMDZINmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMSAgIGgzLjg0OGwwLjk3Miw1LjgzNmMwLjA5MSwwLjU0NS0wLjI3NywxLjA2LTAuODIyLDEuMTVDOS45NDEsMTQuMDAyLDkuODg3LDE0LjAwNiw5LjgzMiwxNC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTE3LjEwMSw0OC4wMDZIMTRjLTEuNDA2LDAtMi43NTgtMC42MDMtMy43MDctMS42NTJjLTAuOTQ3LTEuMDQ3LTEuNDA5LTIuNDUzLTEuMjY4LTMuODU4ICAgYzAuMjU1LTIuNTE4LDIuNTIyLTQuNDg5LDUuMTYzLTQuNDg5YzAuNTUzLDAsMSwwLjQ0NywxLDFzLTAuNDQ3LDEtMSwxYy0xLjYyNywwLTMuMDIxLDEuMTgyLTMuMTczLDIuNjkgICBjLTAuMDg3LDAuODU1LDAuMTg0LDEuNjc4LDAuNzYxLDIuMzE2YzAuNTcxLDAuNjMxLDEuMzgyLDAuOTkzLDIuMjI0LDAuOTkzaDMuMTAxYzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTMTcuNjUzLDQ4LjAwNiwxNy4xMDEsNDguMDA2eiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTY0QzNDOyIgY3g9IjMiIGN5PSI4LjAwNiIgcj0iMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="40"
                                />
                              </NavLink>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </NavLink>
                </Card>

                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/styles/main_product_image/public/Butterscotch-Cake-1-2-Kg-B.jpg?itok=W_Z044vX"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Butterscotch Cake</CardTitle>
                      <CardText>
                      </CardText>
                      <Row>
                        <Col className="mt-2" xs="6">
                          $1599.00
                      </Col>
                        <Col xs="6">
                          <Row>
                            <Col className="mt-2" xs="4">
                              <NavLink
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc0LjY0NCw3NC4yN0M0NDkuMzkxLDQ1LjYxNiw0MTQuMzU4LDI5LjgzNiwzNzYsMjkuODM2Yy01My45NDgsMC04OC4xMDMsMzIuMjItMTA3LjI1NSw1OS4yNSAgICBjLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1ICAgIGMtMzguMzU4LDAtNzMuMzkxLDE1Ljc4MS05OC42NDUsNDQuNDM1QzEzLjI2NywxMDEuNjA1LDAsMTM4LjIxMywwLDE3Ny4zNTFjMCw0Mi42MDMsMTYuNjMzLDgyLjIyOCw1Mi4zNDUsMTI0LjcgICAgYzMxLjkxNywzNy45Niw3Ny44MzQsNzcuMDg4LDEzMS4wMDUsMTIyLjM5N2MxOS44MTMsMTYuODg0LDQwLjMwMiwzNC4zNDQsNjIuMTE1LDUzLjQyOWwwLjY1NSwwLjU3NCAgICBjMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxICAgIGM1My4xNjgtNDUuMzA2LDk5LjA4NS04NC40MzQsMTMxLjAwMi0xMjIuMzk1QzQ5NS4zNjcsMjU5LjU3OCw1MTIsMjE5Ljk1NCw1MTIsMTc3LjM1MSAgICBDNTEyLDEzOC4yMTMsNDk4LjczMywxMDEuNjA1LDQ3NC42NDQsNzQuMjd6IE0zMDkuMTkzLDQwMS42MTRjLTE3LjA4LDE0LjU1NC0zNC42NTgsMjkuNTMzLTUzLjE5Myw0NS42NDYgICAgYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUgICAgQzc5LjM0LDcyLjAwNywxMDYuMzc5LDU5LjgzNiwxMzYsNTkuODM2YzQxLjEyOSwwLDY3LjcxNiwyNS4zMzgsODIuNzc2LDQ2LjU5NGMxMy41MDksMTkuMDY0LDIwLjU1OCwzOC4yODIsMjIuOTYyLDQ1LjY1OSAgICBjMi4wMTEsNi4xNzUsNy43NjgsMTAuMzU0LDE0LjI2MiwxMC4zNTRjNi40OTQsMCwxMi4yNTEtNC4xNzksMTQuMjYyLTEwLjM1NGMyLjQwNC03LjM3Nyw5LjQ1My0yNi41OTUsMjIuOTYyLTQ1LjY2ICAgIGMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxICAgIEM0ODIsMjU0LjM1OCw0MTMuMjU1LDMxMi45MzksMzA5LjE5Myw0MDEuNjE0eiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="20"
                                />
                              </NavLink>
                            </Col>
                            <Col xs="4">
                              <NavLink
                                onClick={() => this.toggle(8)}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjAxMyA1OS4wMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5LjAxMyA1OS4wMTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQjk3RDM7IiBkPSJNMTUsMzkuMDA2bC01LjE2Ny0yNkg1OHYyMi4wMTJjMCwyLjIwMi0xLjc4NSwzLjk4OC0zLjk4OCwzLjk4OEgxNSIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik01Ny4zMDYsMjguOTIzbC05LjM2Niw5LjM2NWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgICBjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsOS4zNjYtOS4zNjVjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCAgICBTNTcuNjk2LDI4LjUzMyw1Ny4zMDYsMjguOTIzeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTguNzIsMTcuNjA5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDM2LjYyMywzOC4yOTJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgQzM2LjgxOCwzOS45MDIsMzcuMDc0LDQwLDM3LjMzLDQwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDU4LjcyLDE5LjAyM0M1OS4xMSwxOC42MzIsNTkuMTEsMTgsNTguNzIsMTcuNjA5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTIuNzI3LDEyLjI4OWMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwyNS4zMDUsMzguMjk1Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wyNi4wMDgtMjYuMDA3QzUzLjExNywxMy4zMTIsNTMuMTE3LDEyLjY3OSw1Mi43MjcsMTIuMjg5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzAuMDk0LDEyLjI5NGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwxMi4zNjcsMjguNjA3Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxNi4zMTMtMTYuMzEzQzMwLjQ4NCwxMy4zMTgsMzAuNDg0LDEyLjY4NSwzMC4wOTQsMTIuMjk0eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNDEuNDEsMTIuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDE1LjYxNSwzNi42NzJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDQxLjQxLDEzLjcwNkM0MS44MDEsMTMuMzE1LDQxLjgwMSwxMi42ODIsNDEuNDEsMTIuMjkyeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTguNzc2LDEyLjI5N2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMGwtNi44NzEsNi44NzFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzbDYuODcxLTYuODcxQzE5LjE2NywxMy4zMjEsMTkuMTY3LDEyLjY4OCwxOC43NzYsMTIuMjk3eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NC4wMTMsNDAuMDA2SDE0LjE3OWwtNS41NjQtMjhINTl2MjMuMDEzQzU5LDM3Ljc2OSw1Ni43NjMsNDAuMDA2LDU0LjAxMyw0MC4wMDZ6IE0xNS44MjEsMzguMDA2ICAgaDM4LjE5MWMxLjY0NywwLDIuOTg3LTEuMzQsMi45ODctMi45ODdWMTQuMDA2SDExLjA1MkwxNS44MjEsMzguMDA2eiIvPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjIyIiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0yMiw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTMjUuMzA5LDU0LjAwNiwyMiw1NC4wMDZ6IE0yMiw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzI0LjIwNiw0NC4wMDYsMjIsNDQuMDA2eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjQ1IiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik00NSw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTNDguMzA5LDU0LjAwNiw0NSw1NC4wMDZ6IE00NSw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzQ3LjIwNiw0NC4wMDYsNDUsNDQuMDA2eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NSw0OC4wMDZoLTUuMTAxYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xSDU1YzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTNTUuNTUzLDQ4LjAwNiw1NSw0OC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTQwLjEwMSw0OC4wMDZIMjYuODk5Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDEzLjIwMWMwLjU1MywwLDEsMC40NDcsMSwxICAgUzQwLjY1Myw0OC4wMDYsNDAuMTAxLDQ4LjAwNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNOS44MzIsMTQuMDA2Yy0wLjQ4LDAtMC45MDQtMC4zNDctMC45ODUtMC44MzZMOC4xNTIsOS4wMDZINmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMSAgIGgzLjg0OGwwLjk3Miw1LjgzNmMwLjA5MSwwLjU0NS0wLjI3NywxLjA2LTAuODIyLDEuMTVDOS45NDEsMTQuMDAyLDkuODg3LDE0LjAwNiw5LjgzMiwxNC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTE3LjEwMSw0OC4wMDZIMTRjLTEuNDA2LDAtMi43NTgtMC42MDMtMy43MDctMS42NTJjLTAuOTQ3LTEuMDQ3LTEuNDA5LTIuNDUzLTEuMjY4LTMuODU4ICAgYzAuMjU1LTIuNTE4LDIuNTIyLTQuNDg5LDUuMTYzLTQuNDg5YzAuNTUzLDAsMSwwLjQ0NywxLDFzLTAuNDQ3LDEtMSwxYy0xLjYyNywwLTMuMDIxLDEuMTgyLTMuMTczLDIuNjkgICBjLTAuMDg3LDAuODU1LDAuMTg0LDEuNjc4LDAuNzYxLDIuMzE2YzAuNTcxLDAuNjMxLDEuMzgyLDAuOTkzLDIuMjI0LDAuOTkzaDMuMTAxYzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTMTcuNjUzLDQ4LjAwNiwxNy4xMDEsNDguMDA2eiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTY0QzNDOyIgY3g9IjMiIGN5PSI4LjAwNiIgcj0iMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="40"
                                />
                              </NavLink>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </NavLink>
                </Card>

                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/styles/main_product_image/public/Black-forest-cake-1-2-Kg-B.jpg?itok=WxfF3oUg"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Black Forest Cake</CardTitle>
                      <CardText>
                      </CardText>
                      <Row>
                        <Col className="mt-2" xs="6">
                          $1599.00
                      </Col>
                        <Col xs="6">
                          <Row>
                            <Col className="mt-2" xs="4">
                              <NavLink
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc0LjY0NCw3NC4yN0M0NDkuMzkxLDQ1LjYxNiw0MTQuMzU4LDI5LjgzNiwzNzYsMjkuODM2Yy01My45NDgsMC04OC4xMDMsMzIuMjItMTA3LjI1NSw1OS4yNSAgICBjLTQuOTY5LDcuMDE0LTkuMTk2LDE0LjA0Ny0xMi43NDUsMjAuNjY1Yy0zLjU0OS02LjYxOC03Ljc3NS0xMy42NTEtMTIuNzQ1LTIwLjY2NWMtMTkuMTUyLTI3LjAzLTUzLjMwNy01OS4yNS0xMDcuMjU1LTU5LjI1ICAgIGMtMzguMzU4LDAtNzMuMzkxLDE1Ljc4MS05OC42NDUsNDQuNDM1QzEzLjI2NywxMDEuNjA1LDAsMTM4LjIxMywwLDE3Ny4zNTFjMCw0Mi42MDMsMTYuNjMzLDgyLjIyOCw1Mi4zNDUsMTI0LjcgICAgYzMxLjkxNywzNy45Niw3Ny44MzQsNzcuMDg4LDEzMS4wMDUsMTIyLjM5N2MxOS44MTMsMTYuODg0LDQwLjMwMiwzNC4zNDQsNjIuMTE1LDUzLjQyOWwwLjY1NSwwLjU3NCAgICBjMi44MjgsMi40NzYsNi4zNTQsMy43MTMsOS44OCwzLjcxM3M3LjA1Mi0xLjIzOCw5Ljg4LTMuNzEzbDAuNjU1LTAuNTc0YzIxLjgxMy0xOS4wODUsNDIuMzAyLTM2LjU0NCw2Mi4xMTgtNTMuNDMxICAgIGM1My4xNjgtNDUuMzA2LDk5LjA4NS04NC40MzQsMTMxLjAwMi0xMjIuMzk1QzQ5NS4zNjcsMjU5LjU3OCw1MTIsMjE5Ljk1NCw1MTIsMTc3LjM1MSAgICBDNTEyLDEzOC4yMTMsNDk4LjczMywxMDEuNjA1LDQ3NC42NDQsNzQuMjd6IE0zMDkuMTkzLDQwMS42MTRjLTE3LjA4LDE0LjU1NC0zNC42NTgsMjkuNTMzLTUzLjE5Myw0NS42NDYgICAgYy0xOC41MzQtMTYuMTExLTM2LjExMy0zMS4wOTEtNTMuMTk2LTQ1LjY0OEM5OC43NDUsMzEyLjkzOSwzMCwyNTQuMzU4LDMwLDE3Ny4zNTFjMC0zMS44MywxMC42MDUtNjEuMzk0LDI5Ljg2Mi04My4yNDUgICAgQzc5LjM0LDcyLjAwNywxMDYuMzc5LDU5LjgzNiwxMzYsNTkuODM2YzQxLjEyOSwwLDY3LjcxNiwyNS4zMzgsODIuNzc2LDQ2LjU5NGMxMy41MDksMTkuMDY0LDIwLjU1OCwzOC4yODIsMjIuOTYyLDQ1LjY1OSAgICBjMi4wMTEsNi4xNzUsNy43NjgsMTAuMzU0LDE0LjI2MiwxMC4zNTRjNi40OTQsMCwxMi4yNTEtNC4xNzksMTQuMjYyLTEwLjM1NGMyLjQwNC03LjM3Nyw5LjQ1My0yNi41OTUsMjIuOTYyLTQ1LjY2ICAgIGMxNS4wNi0yMS4yNTUsNDEuNjQ3LTQ2LjU5Myw4Mi43NzYtNDYuNTkzYzI5LjYyMSwwLDU2LjY2LDEyLjE3MSw3Ni4xMzcsMzQuMjdDNDcxLjM5NSwxMTUuOTU3LDQ4MiwxNDUuNTIxLDQ4MiwxNzcuMzUxICAgIEM0ODIsMjU0LjM1OCw0MTMuMjU1LDMxMi45MzksMzA5LjE5Myw0MDEuNjE0eiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="20"
                                />
                              </NavLink>
                            </Col>
                            <Col xs="4">
                              <NavLink
                                onClick={() => this.toggle(8)}
                                tag="button"
                                to="/"
                              >
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5LjAxMyA1OS4wMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5LjAxMyA1OS4wMTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQjk3RDM7IiBkPSJNMTUsMzkuMDA2bC01LjE2Ny0yNkg1OHYyMi4wMTJjMCwyLjIwMi0xLjc4NSwzLjk4OC0zLjk4OCwzLjk4OEgxNSIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRThGOTsiIGQ9Ik01Ny4zMDYsMjguOTIzbC05LjM2Niw5LjM2NWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgICBjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNsOS4zNjYtOS4zNjVjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCAgICBTNTcuNjk2LDI4LjUzMyw1Ny4zMDYsMjguOTIzeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTguNzIsMTcuNjA5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDM2LjYyMywzOC4yOTJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgQzM2LjgxOCwzOS45MDIsMzcuMDc0LDQwLDM3LjMzLDQwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDU4LjcyLDE5LjAyM0M1OS4xMSwxOC42MzIsNTkuMTEsMTgsNTguNzIsMTcuNjA5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNTIuNzI3LDEyLjI4OWMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwyNS4zMDUsMzguMjk1Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wyNi4wMDgtMjYuMDA3QzUzLjExNywxMy4zMTIsNTMuMTE3LDEyLjY3OSw1Mi43MjcsMTIuMjg5eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMzAuMDk0LDEyLjI5NGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMEwxMi4zNjcsMjguNjA3Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxNi4zMTMtMTYuMzEzQzMwLjQ4NCwxMy4zMTgsMzAuNDg0LDEyLjY4NSwzMC4wOTQsMTIuMjk0eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNNDEuNDEsMTIuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwTDE1LjYxNSwzNi42NzJjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzTDQxLjQxLDEzLjcwNkM0MS44MDEsMTMuMzE1LDQxLjgwMSwxMi42ODIsNDEuNDEsMTIuMjkyeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEMEU4Rjk7IiBkPSJNMTguNzc2LDEyLjI5N2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMGwtNi44NzEsNi44NzFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTQgICAgYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzbDYuODcxLTYuODcxQzE5LjE2NywxMy4zMjEsMTkuMTY3LDEyLjY4OCwxOC43NzYsMTIuMjk3eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NC4wMTMsNDAuMDA2SDE0LjE3OWwtNS41NjQtMjhINTl2MjMuMDEzQzU5LDM3Ljc2OSw1Ni43NjMsNDAuMDA2LDU0LjAxMyw0MC4wMDZ6IE0xNS44MjEsMzguMDA2ICAgaDM4LjE5MWMxLjY0NywwLDIuOTg3LTEuMzQsMi45ODctMi45ODdWMTQuMDA2SDExLjA1MkwxNS44MjEsMzguMDA2eiIvPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjIyIiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0yMiw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTMjUuMzA5LDU0LjAwNiwyMiw1NC4wMDZ6IE0yMiw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzI0LjIwNiw0NC4wMDYsMjIsNDQuMDA2eiIvPgoJPC9nPgoJPGc+CgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjQ1IiBjeT0iNDguMDA2IiByPSI1Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik00NSw1NC4wMDZjLTMuMzA5LDAtNi0yLjY5MS02LTZzMi42OTEtNiw2LTZzNiwyLjY5MSw2LDZTNDguMzA5LDU0LjAwNiw0NSw1NC4wMDZ6IE00NSw0NC4wMDYgICAgYy0yLjIwNiwwLTQsMS43OTQtNCw0czEuNzk0LDQsNCw0czQtMS43OTQsNC00UzQ3LjIwNiw0NC4wMDYsNDUsNDQuMDA2eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik01NSw0OC4wMDZoLTUuMTAxYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xSDU1YzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTNTUuNTUzLDQ4LjAwNiw1NSw0OC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTQwLjEwMSw0OC4wMDZIMjYuODk5Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDEzLjIwMWMwLjU1MywwLDEsMC40NDcsMSwxICAgUzQwLjY1Myw0OC4wMDYsNDAuMTAxLDQ4LjAwNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNOS44MzIsMTQuMDA2Yy0wLjQ4LDAtMC45MDQtMC4zNDctMC45ODUtMC44MzZMOC4xNTIsOS4wMDZINmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMSAgIGgzLjg0OGwwLjk3Miw1LjgzNmMwLjA5MSwwLjU0NS0wLjI3NywxLjA2LTAuODIyLDEuMTVDOS45NDEsMTQuMDAyLDkuODg3LDE0LjAwNiw5LjgzMiwxNC4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTE3LjEwMSw0OC4wMDZIMTRjLTEuNDA2LDAtMi43NTgtMC42MDMtMy43MDctMS42NTJjLTAuOTQ3LTEuMDQ3LTEuNDA5LTIuNDUzLTEuMjY4LTMuODU4ICAgYzAuMjU1LTIuNTE4LDIuNTIyLTQuNDg5LDUuMTYzLTQuNDg5YzAuNTUzLDAsMSwwLjQ0NywxLDFzLTAuNDQ3LDEtMSwxYy0xLjYyNywwLTMuMDIxLDEuMTgyLTMuMTczLDIuNjkgICBjLTAuMDg3LDAuODU1LDAuMTg0LDEuNjc4LDAuNzYxLDIuMzE2YzAuNTcxLDAuNjMxLDEuMzgyLDAuOTkzLDIuMjI0LDAuOTkzaDMuMTAxYzAuNTUzLDAsMSwwLjQ0NywxLDEgICBTMTcuNjUzLDQ4LjAwNiwxNy4xMDEsNDguMDA2eiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTY0QzNDOyIgY3g9IjMiIGN5PSI4LjAwNiIgcj0iMyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                                  alt=""
                                  height="40"
                                />
                              </NavLink>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </NavLink>
                </Card>

              </CardGroup>
          </div>

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
