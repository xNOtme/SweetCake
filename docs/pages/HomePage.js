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
                    src="https://www.sweetcake.co/media/wysiwyg/new-year_1.jpg"
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
                    src="https://www.sweetcake.co/media/wysiwyg/anniversary-banner_1.jpg"
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
                    src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Chocolate Photo Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://img.taste.com.au/uqaR-hn1/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Fresh Fruit Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/12/06104523/magic-cake-recipe.jpg?ssl=1?w=356&strip=all&quality=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="primary"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Kitkat Jems Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>
              </CardGroup>

              <CardGroup deck className="mt-3">
                <Card>
                  <CardImage
                    src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Basket Flower Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    {/* <Button href="/productpage" color="primary" size="md" >
                      READ MORE
                    </Button>                     */}
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
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
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/12/06104523/magic-cake-recipe.jpg?ssl=1?w=356&strip=all&quality=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="primary"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Chocolate Rose Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>
              </CardGroup>

              <hr className="my-5"></hr>
              <h2 className="text-center my-4 font-weight-bold">Best Selling Products</h2>
              
              <CardGroup deck className="mt-3">
                <Card>
                  <CardImage
                    src="https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Chocolate Photo Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://img.taste.com.au/uqaR-hn1/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg"
                    alt="Card image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Fresh Fruit Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>

                <Card>
                  <CardImage
                    src="https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/12/06104523/magic-cake-recipe.jpg?ssl=1?w=356&strip=all&quality=80"
                    alt="Card image cap"
                    top
                    hover
                    overlay="primary"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Kitkat Jems Cake</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                    <NavLink
                      tag="button"
                      className="btn btn-sm btn-primary"
                      to="/productpage"
                    >
                      READ MORE
                    </NavLink>
                  </CardBody>
                </Card>
              </CardGroup>

              <hr className="my-5" />
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
