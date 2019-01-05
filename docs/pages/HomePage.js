import React, { Component } from "react";

import "./HomePage.css";

import {
  Container,
  Col,
  Row,
  Fa,
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText,
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem

} from "mdbreact";
import DocsLink from "./DocsLink";
const NavLink = require("react-router-dom").NavLink;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <div>
        <div>
          {/* <h4 className="mt-5 mb-2"></h4> */}
          <Carousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <CarouselInner>
              <CarouselItem itemId="1">
                <View>
                  <img
                    className="img-fluid"
                    src="http://img.96jm.com/uploads/pic/ddgbanner-1.jpg"
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
                    src="https://www.flowerora.com/image/catalog/home/cake-fo-banner.jpg"
                    alt="Second slide"
                  />
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive"> </h3>
                  <p> </p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="3">
                <View>
                  <img
                    className="img-fluid"
                    src="http://www.salentoclub.it/sites/default/files/foto-home-salento-prodotti_0_0.jpg"
                    alt="Third slide"
                  />
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive"> </h3>
                  <p> </p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="4">
                <View>
                  <img
                    className="img-fluid"
                    src="http://www.onlinechurchsolutions.com/folders/GraceDurango/files/Advent%20Banner.jpg"
                    alt="Mattonit's item"
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

        <div className="ml-4 mr-4">
          <CardGroup sm="4" xs="6" deck className="mt-3">
            <Card>
              <NavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/productpage"
              >
                <CardImage
                  src="https://img.bestrecipes.com.au/LYibLhwl/h300-w400-cscale/br-api/asset/5981/plain-cake-recipe.jpg"
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
              </NavLink>
            </Card>
            <Card>
              <NavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/productpage"
              >
                <CardImage
                  src="https://thermobliss.com/wp-content/uploads/2017/04/Thermomix-Butter-Cake-2.jpg"
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
              </NavLink>
            </Card>
            <Card>
              <NavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/productpage"
              >
                <CardImage
                  src="https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/09/3908654410_7881d60245.jpg"
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
              </NavLink>
            </Card>
            <Card>
              <NavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/productpage"
              >
                <CardImage
                  src="https://4.bp.blogspot.com/-OOJKYGOmJWw/TaMX_4ikA0I/AAAAAAAAAXw/OeLCLd3FTT4/s400/dscn0341a.jpg"
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
              </NavLink>
            </Card>
            <Card>
              <NavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/productpage"
              >
                <CardImage
                  src="https://i.kym-cdn.com/photos/images/newsfeed/000/501/499/7e1.jpg"
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
              </NavLink>
            </Card>
          </CardGroup>
        </div>

        <Container>
          <Row>
            <Col md="12" className="mx-auto mt-3">
              <h2 className="text-center my-3 font-weight-bold">
                Welcome to Sweetcake
              </h2>
              <p className="text-center">
                Hey Everyone! We are Sweet Cake founded by a group of Online Cake Store professionals passionate about serving authentic
              </p>
              <p className="text-center">
                Custamize Cake Designer Cake back in 2014. We Provide Online Cake And Flower Delivery in Delhi/NCR
              </p>

              <hr className="my-5" />

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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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


              <hr className="my-4"></hr>
              <h2 className="text-center my-4 font-weight-bold">New Selling Products</h2>

              <CardGroup deck className="mt-3">
                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Rosy Delight</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                      src="https://img.taste.com.au/uqaR-hn1/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Cricket Pitch Cake</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                      src="https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/12/06104523/magic-cake-recipe.jpg?ssl=1?w=356&strip=all&quality=80"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                    <CardBody>
                      <CardTitle tag="h5">Chocolate Rose Cake</CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                                tag="button"
                                to="/productpage"
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

              
              <hr className="my-5" />
              <h2 className="text-center my-4 ">Surprises for</h2>    

              <CardGroup deck className="mt-3" >
                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/alloccasion/product_category/same-day-delivery.jpg"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                  </NavLink>
                </Card>

                <Card>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/productpage"
                  >
                    <CardImage
                      src="https://media.floweraura.com/sites/default/files/alloccasion/product_category/Mid-night-delivery.jpg"
                      alt="Card image cap"
                      top
                      hover
                      overlay="white-slight"
                    />                    
                  </NavLink>
                </Card>
              </CardGroup> 

              <hr className="my-5" />
              <h2 className="text-center my-4 ">Customer Review</h2>
              <Row id="categories">
                <CardGroup deck className="mt-3">
                  <Card>
                    <CardBody>
                      <CardTitle>Satisfing</CardTitle>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star-o orange-text" aria-hidden="true"></i>
                      <CardText>
                        <p>on time delivery nd good product</p>
                        <h6>Neha Mittal</h6>
                      </CardText>
                      <CardText small muted>
                        <p>On December 22, 2018 from hisar</p>
                      </CardText>
                      <Row>
                        <Col md="1" sm="1" xs="1">
                          <h3><i class="fa fa-thumbs-up light-blue-text" aria-hidden="true"></i></h3>
                        </Col>
                        <Col md="10" sm="10" xs="10">
                          <p className="mt-1">Recommends</p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle>Awesome</CardTitle>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <CardText>
                        <p>flowers were fresh. thanks taste of cake was also good.. before time delivery done.</p>
                        <h6>Neha Mittal</h6>
                      </CardText>
                      <CardText small muted>
                        On December 13, 2018 from Dubai
                      </CardText>
                      <Row>
                        <Col md="1" sm="1" xs="1">
                          <h3><i class="fa fa-thumbs-up light-blue-text" aria-hidden="true"></i></h3>
                        </Col>
                        <Col md="10" sm="10" xs="10">
                          <p className="mt-1">Recommends</p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <CardTitle>Nice</CardTitle>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <i class="fa fa-star orange-text" aria-hidden="true"></i>
                      <CardText>
                        <p>on time delivery.product was tooo good.thq floweraura</p>
                        <h6>Bhavani</h6>
                      </CardText>
                      <CardText small muted>
                        On December 13, 2018 from Japan
                      </CardText>
                      <Row>
                        <Col md="1" sm="1" xs="1">
                          <h3><i class="fa fa-thumbs-up light-blue-text" aria-hidden="true"></i></h3>
                        </Col>
                        <Col md="10" sm="10" xs="10">
                          <p className="mt-1">Recommends</p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
