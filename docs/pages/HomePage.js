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
  CardText 

} from "mdbreact";
import DocsLink from "./DocsLink";
const NavLink = require("react-router-dom").NavLink;

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h4 className="mt-5 mb-2"></h4>
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
                    className="d-block"
                    src="https://www.sweetcake.co/media/wysiwyg/anniversary-banner_1.jpg"
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
                    className="d-block"
                    src="https://www.sweetcake.co/media/wysiwyg/new-year_1.jpg"
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
                    className="d-block"
                    src="https://www.sweetcake.co/media/wysiwyg/Birthday-banner_1.jpg"
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
                    className="d-block"
                    src="https://www.sweetcake.co/media/wysiwyg/Mid-night-cakes.jpg"
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
        </Container>

        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
                Welcome to Sweetcake
              </h2>
              <p className="text-center">
                Hey Everyone! We are Sweet Cake founded by a group of Online Cake Store professionals passionate about serving authentic
              </p>
              <p className="text-center">
                Custamize Cake Designer Cake back in 2014. We Provide Online Cake And Flower Delivery in Delhi/NCR
              </p>
              <hr className="my-5" />

              <CardGroup deck className="mt-3">
                <Card>
                  <CardImage
                    src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Panel title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                </CardText>
                    <Button color="primary" size="md">
                      Add to card
                </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Panel title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                </CardText>
                    <Button color="light-blue" size="md">
                      Add to card
                </Button>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                    alt="Card image cap"
                    top
                    hover
                    overlay="primary"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Panel title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                </CardText>
                    <Button color="primary" size="md">
                      Add to card
                </Button>
                  </CardBody>
                </Card>
              </CardGroup>

              <hr className="my-5" />
              <Row id="categories">
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="css3" className="pink-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">CSS</h4>
                    <p className="grey-text">
                      Animations, colours, shadows, skins and many more! Get to
                      know all our css styles in one place.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/css"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="cubes" className="blue-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">COMPONENTS</h4>
                    <p className="grey-text">
                      Ready-to-use components that you can use in your
                      applications. Both basic and extended versions!
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/components"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="code" className="green-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADVANCED</h4>
                    <p className="grey-text">
                      Advanced components such as charts, carousels, tooltips
                      and popovers. All in Material Design version.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/advanced"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
              </Row>
              <Row id="categories">
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="bars" className="pink-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NAVIGATION</h4>
                    <p className="grey-text">
                      Ready-to-use navigation layouts, navbars, breadcrumbs and
                      much more! Learn more about our navigation components.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/navigation"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="edit" className="blue-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">FORMS</h4>
                    <p className="grey-text">
                      Inputs, autocomplete, selecst, date and time pickers.
                      Everything in one place is ready to use!
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/forms"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="table" className="green-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">TABLES</h4>
                    <p className="grey-text">
                      Basic and advanced tables. Responsive, datatables, with
                      sorting, searching and export to csv.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/tables"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
              </Row>
              <Row id="categories">
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="window-restore" className="pink-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MODALS</h4>
                    <p className="grey-text">
                      Modals used to display advanced messages to the user.
                      Cookies, logging in, registration and much more.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/modals"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="arrows" className="blue-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">EXTENDED</h4>
                    <p className="grey-text">
                      Google Maps, Social Buttons, Pre-built Contact Forms and
                      Steppers. Find out more about our extended components.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/extended"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="th" className="green-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">SECTIONS</h4>
                    <p className="grey-text">
                      E-commerce, contact, blog and much more sections. All
                      ready to use in seconds.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3"
                      to="/sections"
                    >
                      Learn more
                    </NavLink>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
