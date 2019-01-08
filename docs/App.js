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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABBCAMAAACjORu8AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAq1BMVEVHcExqjwBpkABqjwD+FE5tjQJsjQGJehNtjQJqjwD/E05pkAD/FE7/E09qjwBpkAD/E05qjwBrjgFqjwD7F0xqjwBpkABqjwBrjgH/E05qjwBqjwD/FE76GExqjwBtjQL/E05qjwD/FE7/FE5nkgD/FE7/Ek9qjwD/FE7/FE5UowD/FE7/FE6KdhH/FE7JRDR0hwbrJEanXiD/FE5qjwD/ClRklQBsjwCvViTopAnQAAAAM3RSTlMAv6fPLm2HBhG2Sie0l/SAelV4kR392uyc8OQ/Yw5JHTY21ONgQMZFhlL6V1orpUjWdfQbW9FsAAAF9ElEQVRo3u1aa5eaOhQNIARERZGIggoqvmamrk6TMff//7J7kgCC3hlZ99NkVjOrrTyk7Ox99nm0CP3kFfXF7yu9QeQ5Qv3dCuGT5kD29IT68GtLsea6WtB+RA97OtA9QLaUDigs3YHgBVVrobtj0WqdNXetGshOU0mtfmXCp85UY0rcX85vcmU8NoKo/1ED0S/cs57tzH9fr1d2fflzA0I1TYmRDVhe/vm4Icm1jfTJDIDcGNlrbFrhnwYjOldb+FcN42NYn9Sy7BqWMD4uCPtpMZ0H60zP+vG0AxSHy7ttxpwR7mxcbeXV6+HCfHm5Xgmfal5xBS9XwjjntuY4rCtjhDFWaI7DBBwMCJlrjmNDCGfwEz8zK9xc39ClTSBDAHkWIHYs5Fcu4qLY/GamNZIwGH9muw6PPaP6MTBm1jdTluKDP93foM1ZxozvBaQoCUmfAmFOq6v5bkACxUj8/EbyGRD8vBhwcds21J+rr/yivIhXHU3FUdFrdkActF6NKyD+XHiAJwi1vUxdWxvlra4nPL2wIE0lgXgh7E3R0WJwdgW1kehLZRf0Oqh6iCWciAbvaLmjY2iahmLKsxhGHYBMFZBa/75tWjPLC/2vpYVLRgLOLMfxGJsKlZZ3wKEiqRCvbDBuBvOExQATs9mEMaNAPUp3w9PpoGYFQ7osnzuA45xexpQe9uiN0u1wPISbep0ZSau9FEojHHbZyr4MdsVISGYSsWuQObzlSF0bMTaRHwywaa+EV7AEgMQxd7Ccp+XVPAr6oDF9q6vxPoDcyeOcLhQV/S4znlCm9ZHcwczkcBB7QbGeBFY8uYsRa16tqasYcVmdRmfsiEyykbvBQubJk3yGUjav/6YA4UQVEGMhHKQ+9R+B0HfFTr88e+hASSEJkTmhGHFO5sfq1TZO2makkRBdxciUr2tJwob7ysQNDrCwdMQ1snj9BAKEjbh8fL6s+tElfX0Eouae+yWuBfd8oLCWjIgNtEFT05ae8H2M3CoUxcjo9pYogZQai/fH8LSArSVLQMrNDy3A37ZHHC0XIkjugbRGU6to3GUy4gs1CfonkBTvI9z92rUgdJulzhECDuR4hDJ6Q0whPA9uI/XizEf1N/LhVs6dH4DsG0D6l+qm50DwSAAJQBqz492lNJl+mkckI5g3gMyBBJnuTZYpGdlkAmdip1q2jTFP1NcHYEvD8dt+tfyUERxt1U15J2mBiEUrgmf3VXzqkTJkP88jZNR4Duw36AvEJN7VBKElIDR8pyWWlNE7LpUrgZxEoKjOuwFk0TDlDv5rihhZu+s2T5DEKg/4nBFIGP7tFQkWJGSYhWIbSIrEPuCE3cq6I8JEAsnpAdWuJYGc61eugbzSE6pdqwMjoTCjttOm8xhyCZxOcJMR54GRzQ2qyUMJZxpwaRjMtPlGmq5TfwNAKEZeaT182gkM75Ubr+gNyLgeGUadMmIqtr7BB7YtzkuXHeGvGYHMUSoy5AqSx8twNnkZDnG1SwYUpiUjUfUPS6utNKRelfF2DSD7irao2/TQhYaE1XHuOzG/pYtm1+i0ZyyZIsMgib3xC4NbbrUtYWXrQWWL3sRPQyIqAxBgGQqLZd47X+h2SQdvK3Shu7dePqaDkyxRDqXMtm+93tuAXob00mGgK6KhBOKbrLWa0rKTdokyU3WmLV3vJrvZLCuvlx+Q78n6eiZYxzOjyoNynYT+hW5O8vCCXndgv7thFfnSe5eCuA5FyhTCQQJxp4TwFpBOTaA/mWyekJ5Ojtn9yfx8VsKPpGxW+/P+QT+r/LUfSXeLOmhrUsZImrC7xb9ZW/4sSIh0rZQ9Ls0mdgYjhXCXx+VrNjHlsPXr/8Bh6YUDREVCKJUeFtduhgpdGySEByAj/aa/kOu8Bz6IfkPtAlohR/sIkVWEBSXHPSGZhhN50bJ6d0Gy0RAH9CQuwkaTj1GqIw5os2H/cXjLiUamJQ6orgvVihixHGxNkK7Lqjp27Ke+zv9P0/bQz1iZ+UOAoND/IUCO6U/R1uanaAujv+vv+v/rX9hu/EKWGU5nAAAAAElFTkSuQmCC"
                    alt=""
                    height="60"
                  />
                  <strong className="black-text">Sweet Cake</strong>
                </NavbarBrand>
              </Col>
            </Row>
          </Container>

          <Navbar
            color="grey darken-3"
            dark
            expand="md"
            style={{ marginTop: "0px"}}
            fixed="top"
            scrolling
          >
            <NavbarBrand href="/">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTgwLDIzMmMyNi41MSwwLDQ4LTIxLjQ5LDQ4LTQ4YzAtMjYuNTEtMjEuNDktNDgtNDgtNDhzLTQ4LDIxLjQ5LTQ4LDQ4QzMyLjAyNiwyMTAuNDk5LDUzLjUwMSwyMzEuOTc0LDgwLDIzMnogTTgwLDE1MiAgICAgYzE3LjY3MywwLDMyLDE0LjMyNywzMiwzMnMtMTQuMzI3LDMyLTMyLDMycy0zMi0xNC4zMjctMzItMzJTNjIuMzI3LDE1Miw4MCwxNTJ6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik02NCw2NGMyMi4wOCwwLjAyNiwzOS45NzQsMTcuOTIsNDAsNDBjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOGMwLjAyNi0yMi4wOCwxNy45Mi0zOS45NzQsNDAtNDAgICAgIGM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOGMtMjIuMDgtMC4wMjYtMzkuOTc0LTE3LjkyLTQwLTQwYzAtNC40MTgtMy41ODItOC04LThzLTgsMy41ODItOCw4ICAgICBjLTAuMDI2LDIyLjA4LTE3LjkyLDM5Ljk3NC00MCw0MGMtNC40MTgsMC04LDMuNTgyLTgsOFM1OS41ODIsNjQsNjQsNjR6IE0xMTIsMzYuOGM0Ljc0NSw3Ljg2NSwxMS4zMzUsMTQuNDU1LDE5LjIsMTkuMiAgICAgYy03Ljg2NSw0Ljc0NS0xNC40NTUsMTEuMzM1LTE5LjIsMTkuMmMtNC43NDUtNy44NjUtMTEuMzM1LTE0LjQ1NS0xOS4yLTE5LjJDMTAwLjY2NSw1MS4yNTUsMTA3LjI1NSw0NC42NjUsMTEyLDM2Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik0zODQsNDAwYy0yMi4wOC0wLjAyNi0zOS45NzQtMTcuOTItNDAtNDBjMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDhjLTAuMDI2LDIyLjA4LTE3LjkyLDM5Ljk3NC00MCw0MCAgICAgYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzIyLjA4LDAuMDI2LDM5Ljk3NCwxNy45Miw0MCw0MGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04ICAgICBjMC4wMjYtMjIuMDgsMTcuOTItMzkuOTc0LDQwLTQwYzQuNDE4LDAsOC0zLjU4Miw4LThTMzg4LjQxOCw0MDAsMzg0LDQwMHogTTMzNiw0MjcuMmMtNC43NDUtNy44NjUtMTEuMzM1LTE0LjQ1NS0xOS4yLTE5LjIgICAgIGM3Ljg2NS00Ljc0NSwxNC40NTUtMTEuMzM1LDE5LjItMTkuMmM0Ljc0NSw3Ljg2NSwxMS4zMzUsMTQuNDU1LDE5LjIsMTkuMkMzNDcuMzM1LDQxMi43NDUsMzQwLjc0NSw0MTkuMzM1LDMzNiw0MjcuMnoiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTE5MiwxNjBjLTEzLjI1NSwwLTI0LDEwLjc0NS0yNCwyNHYzMmgtNDB2MTZoNDhjNC40MTgsMCw4LTMuNTgyLDgtOHYtNDBjMC00LjQxOCwzLjU4Mi04LDgtOHM4LDMuNTgyLDgsOHY1NiAgICAgYzAsNC40MTgtMy41ODIsOC04LDhoLTY0Yy00LjQxOCwwLTgsMy41ODItOCw4djQwYzAsMi4xMjIsMC44NDQsNC4xNTYsMi4zNDQsNS42NTZsNDMuMzEyLDQzLjMxMiAgICAgYzEuNTAyLDEuNTAyLDIuMzQ2LDMuNTQsMi4zNDQsNS42NjRWNDI0YzAsNC40MTgtMy41ODIsOC04LDhzLTgtMy41ODItOC04di02NGMwLTIuMTIyLTAuODQ0LTQuMTU2LTIuMzQ0LTUuNjU2bC0zMi0zMiAgICAgYy0zLjEyNC0zLjEyMy04LjE4OC0zLjEyMy0xMS4zMTIsMGwtMjQsMjRjLTMuMTIzLDMuMTI0LTMuMTIzLDguMTg4LDAsMTEuMzEybDE5LjMxMiwxOS4zMTJjMS41MDIsMS41MDIsMi4zNDYsMy41NCwyLjM0NCw1LjY2NCAgICAgVjQ1NmMwLDQuNDE4LTMuNTgyLDgtOCw4cy04LTMuNTgyLTgtOHYtNjRjMC0yLjEyMi0wLjg0NC00LjE1Ni0yLjM0NC01LjY1NmwtMzUuMzEyLTM1LjMxMmMtMS41MDItMS41MDItMi4zNDYtMy41NC0yLjM0NC01LjY2NCAgICAgVjMyMGgxNmMxMy4yNTUsMCwyNC0xMC43NDUsMjQtMjRzLTEwLjc0NS0yNC0yNC0yNEg0OHYtMjRIMzJ2MzJjMCw0LjQxOCwzLjU4Miw4LDgsOGgyNGM0LjQxOCwwLDgsMy41ODIsOCw4cy0zLjU4Miw4LTgsOEgyNCAgICAgYy00LjQxOCwwLTgtMy41ODItOC04di01NmMwLTQuNDE4LDMuNTgyLTgsOC04di0xNmMtMTMuMjU1LDAtMjQsMTAuNzQ1LTI0LDI0djU2YzAsMTMuMjU1LDEwLjc0NSwyNCwyNCwyNGg4djI1LjM2OCAgICAgYy0wLjAxNiw2LjM3LDIuNTE2LDEyLjQ4Myw3LjAzMiwxNi45NzZMNzIsMzk1LjMxMlY0NTZjMCwxMy4yNTUsMTAuNzQ1LDI0LDI0LDI0czI0LTEwLjc0NSwyNC0yNHYtNzMuMzY4ICAgICBjMC4wMi02LjM3MS0yLjUxMi0xMi40ODUtNy4wMzItMTYuOTc2TDk5LjMxMiwzNTJMMTEyLDMzOS4zMTJsMjQsMjRWNDI0YzAsMTMuMjU1LDEwLjc0NSwyNCwyNCwyNHMyNC0xMC43NDUsMjQtMjR2LTczLjM2OCAgICAgYzAuMDItNi4zNzEtMi41MTItMTIuNDg1LTcuMDMyLTE2Ljk3NkwxMzYsMjkyLjY4OFYyNjRoNTZjMTMuMjU1LDAsMjQtMTAuNzQ1LDI0LTI0di01NkMyMTYsMTcwLjc0NSwyMDUuMjU1LDE2MCwxOTIsMTYweiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cGF0aCBkPSJNMzY4LDk2YzI2LjUxLDAsNDgtMjEuNDksNDgtNDhTMzk0LjUxLDAsMzY4LDBjLTI2LjUxLDAtNDgsMjEuNDktNDgsNDhDMzIwLjAyNiw3NC40OTksMzQxLjUwMSw5NS45NzQsMzY4LDk2eiBNMzY4LDE2ICAgICBjMTcuNjczLDAsMzIsMTQuMzI3LDMyLDMycy0xNC4zMjcsMzItMzIsMzJjLTE3LjY3MywwLTMyLTE0LjMyNy0zMi0zMlMzNTAuMzI3LDE2LDM2OCwxNnoiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTQ1Niw4MGgtNDh2MTZoNDhjNC40MTgsMCw4LDMuNTgyLDgsOHY0OGMwLDQuNDE4LTMuNTgyLDgtOCw4cy04LTMuNTgyLTgtOHYtMzJjMC00LjQxOC0zLjU4Mi04LTgtOGgtMzIgICAgIGMtNC40MTgsMC04LDMuNTgyLTgsOHY4OS4zNjhjMC4wMDIsMi4xMjQtMC44NDIsNC4xNjItMi4zNDQsNS42NjRsLTI3LjMxMiwyNy4zMTJjLTMuMTIzLDMuMTI0LTMuMTIzLDguMTg4LDAsMTEuMzEyICAgICBsMzYuNjg4LDM2LjY4OGMzLjEyMywzLjEyNCwzLjEyMyw4LjE4OCwwLDExLjMxMmwtMS4zNzYsMS4zNjhjLTMuMTI0LDMuMTIzLTguMTg4LDMuMTIzLTExLjMxMiwwbC00OS4zNzYtNDkuMzc2ICAgICBjLTMuMTIzLTMuMTI0LTMuMTIzLTguMTg4LDAtMTEuMzEybDIwLjY4OC0yMC42ODhjMy4xMjMtMy4xMjQsMy4xMjMtOC4xODgsMC0xMS4zMTJsLTI0LTI0Yy0zLjEyNC0zLjEyMy04LjE4OC0zLjEyMy0xMS4zMTIsMCAgICAgbC0zMiwzMmMtMS41MDIsMS41MDItMi4zNDYsMy41NC0yLjM0NCw1LjY2NHY2NGMwLDQuNDE4LTMuNTgyLDgtOCw4cy04LTMuNTgyLTgtOHYtNzMuMzY4Yy0wLjAwMi0yLjEyNCwwLjg0Mi00LjE2MiwyLjM0NC01LjY2NCAgICAgbDQzLjMxMi00My4zMTJjMS41LTEuNSwyLjM0NC0zLjUzNCwyLjM0NC01LjY1NnYtNDBjMC00LjQxOC0zLjU4Mi04LTgtOGgtNDhjLTQuNDE4LDAtOC0zLjU4Mi04LThWNDhjMC00LjQxOCwzLjU4Mi04LDgtOCAgICAgczgsMy41ODIsOCw4djQwYzAsNC40MTgsMy41ODIsOCw4LDhoMzJWODBoLTI0VjQ4YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQsMTAuNzQ1LTI0LDI0djU2YzAsMTMuMjU1LDEwLjc0NSwyNCwyNCwyNGg0MCAgICAgdjI4LjY4OGwtNDAuOTY4LDQwLjk2OGMtNC41MTYsNC40OTMtNy4wNDgsMTAuNjA2LTcuMDMyLDE2Ljk3NlYyODhjMCwxMy4yNTUsMTAuNzQ1LDI0LDI0LDI0czI0LTEwLjc0NSwyNC0yNHYtNjAuNjg4bDI0LTI0ICAgICBMMzQ4LjY4OCwyMTZsLTE1LjAzMiwxNS4wMjRjLTkuMzczLDkuMzcyLTkuMzc1LDI0LjU2OC0wLjAwMywzMy45NDFjMC4wMDEsMC4wMDEsMC4wMDIsMC4wMDIsMC4wMDMsMC4wMDNsNDkuMzc2LDQ5LjM3NiAgICAgYzkuMzcyLDkuMzY5LDI0LjU2NCw5LjM2OSwzMy45MzYsMGwxLjM3Ni0xLjM2OGM5LjM3My05LjM3Miw5LjM3NS0yNC41NjgsMC4wMDMtMzMuOTQxYy0wLjAwMS0wLjAwMS0wLjAwMi0wLjAwMi0wLjAwMy0wLjAwMyAgICAgTDM4Ny4zMTIsMjQ4bDIxLjY1Ni0yMS42NTZjNC41Mi00LjQ5MSw3LjA1Mi0xMC42MDUsNy4wMzItMTYuOTc2VjEyOGgxNnYyNGMwLDEzLjI1NSwxMC43NDUsMjQsMjQsMjRzMjQtMTAuNzQ1LDI0LTI0di00OCAgICAgQzQ4MCw5MC43NDUsNDY5LjI1NSw4MCw0NTYsODB6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxyZWN0IHg9IjM2MCIgeT0iNDAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyNCIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cGF0aCBkPSJNMTA0LDE5MnYtMjRIODh2MTZINzJ2MTZoMjRDMTAwLjQxOCwyMDAsMTA0LDE5Ni40MTgsMTA0LDE5MnoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                height="40" />
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9Ii0zIDAgNDg3IDQ4Ny43ODc2MyIgd2lkdGg9IjE2cHgiPjxwYXRoIGQ9Im00ODAuMzk4NDM4IDM0My43ODkwNjJ2LTcyYy0uMDIzNDM4LTIyLjA4MjAzMS0xNy45MTc5NjktMzkuOTc2NTYyLTQwLTQwaC0zMnYtODBjMC00LjQxNzk2OC0zLjU4MjAzMi04LTgtOGgtNDhjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMi04IDh2ODBoLTcydi05NmMwLTQuNDE3OTY4LTMuNTgyMDMyLTgtOC04aC00OGMtNC40MTc5NjkgMC04IDMuNTgyMDMyLTggOHY5NmgtNzJ2LTgwYzAtNC40MTc5NjgtMy41ODIwMzItOC04LThoLTQ4Yy00LjQxNzk2OSAwLTggMy41ODIwMzItOCA4djgwaC0zMmMtMjIuMDc4MTI2LjAyMzQzOC0zOS45NzI2NTcgMTcuOTE3OTY5LTQwIDQwdjcyYy0uMjczNDM4IDE3LjE2Nzk2OSA4Ljk2MDkzNyAzMy4wODU5MzggMjQgNDEuMzc1djg2LjYyNWgtMTZjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMi04IDggMCA0LjQxNzk2OSAzLjU4MjAzMSA4IDggOGg0NjRjNC40MTc5NjggMCA4LTMuNTgyMDMxIDgtOCAwLTQuNDE3OTY4LTMuNTgyMDMyLTgtOC04aC0xNnYtODYuNTAzOTA2YzE0LjgwODU5My04LjU4NTkzNyAyMy45NDUzMTItMjQuMzgyODEyIDI0LTQxLjQ5NjA5NHptLTEyMC0xODRoMzJ2NzJoLTMyem0tMTM2LTE2aDMydjg4aC0zMnptLTEzNiAxNmgzMnY3MmgtMzJ6bS03MiAxMTJjMC0xMy4yNTc4MTIgMTAuNzQ2MDkzLTI0IDI0LTI0aDQwMGMxMy4yNTc4MTIgMCAyNCAxMC43NDIxODggMjQgMjR2NzJjLS4wMjczNDQgMTIuNzA3MDMyLTcuNTI3MzQ0IDI0LjIwNzAzMi0xOS4xNDQ1MzIgMjkuMzU5Mzc2LTEyLjA5Mzc1IDUuMDkzNzUtMjYuMDYyNSAyLjQ3MjY1Ni0zNS40ODQzNzUtNi42NjQwNjMtNi4wMDc4MTItNi4wMjczNDQtOS4zNzUtMTQuMTkxNDA2LTkuMzcxMDkzLTIyLjY5NTMxM3YtMzJjLS4wMzkwNjMtMTIuMDgyMDMxLTYuODk0NTMyLTIzLjEwMTU2Mi0xNy43MTA5MzgtMjguNDgwNDY4bC0uNDg4MjgxLS4yNjU2MjVjLTEuMjgxMjUtLjYwNTQ2OS0yLjYwMTU2My0xLjEyMTA5NC0zLjk1MzEyNS0xLjU0Mjk2OS0uNzk2ODc1LS4yNjU2MjUtMS41MjczNDQtLjUyNzM0NC0yLjMyMDMxMy0uNzE4NzUtMS4wMjM0MzctLjIzNDM3NS0yLjA1ODU5My0uNDE3OTY5LTMuMTAxNTYyLS41NDY4NzUtLjcwMzEyNS0uMTAxNTYzLTEuMzc1LS4zMTI1LTIuMDg5ODQ0LS4zNjcxODctLjM4MjgxMyAwLS43NS4wNTQ2ODctMS4xMjUuMDM5MDYyLS4zNzg5MDYtLjAxNTYyNS0uNzkyOTY5LS4xMTcxODgtMS4yMTA5MzctLjExNzE4OC0uODg2NzE5IDAtMS43NDIxODguMTgzNTk0LTIuNjIxMDk0LjI1MzkwNy0uODgyODEzLjA3NDIxOS0xLjgxNjQwNi4xMTMyODEtMi43MTQ4NDQuMjY1NjI1LTEuMzgyODEyLjI1NzgxMi0yLjc1LjYwOTM3NS00LjA4NTkzOCAxLjA0Njg3NS0uNzIyNjU2LjIyMjY1Ni0xLjQ1NzAzMS4zODI4MTItMi4xNjAxNTYuNjU2MjUtMS40OTIxODcuNjA1NDY5LTIuOTMzNTk0IDEuMzI4MTI1LTQuMzEyNSAyLjE2MDE1Ni0uNTAzOTA2LjI4OTA2My0xLjAzOTA2Mi40OTYwOTQtMS41MzUxNTYuODAwNzgxLTEuODY3MTg4IDEuMjEwOTM4LTMuNjA1NDY5IDIuNjEzMjgyLTUuMTgzNTk0IDQuMTgzNTk0LTYuMDI3MzQ0IDUuOTg0Mzc1LTkuNDA2MjUgMTQuMTM2NzE5LTkuMzg2NzE4IDIyLjYzMjgxMnYxNmMwIDE3LjY3MTg3Ni0xNC4zMjQyMTkgMzItMzIgMzItMTcuNjcxODc2IDAtMzItMTQuMzI4MTI0LTMyLTMydi0xNmMtLjAzOTA2My0xMi4wODIwMzEtNi44OTQ1MzItMjMuMTAxNTYyLTE3LjcxMDkzOC0yOC40ODA0NjhsLS40ODgyODEtLjI2NTYyNWMtMS4yODEyNS0uNjA1NDY5LTIuNjAxNTYzLTEuMTIxMDk0LTMuOTUzMTI1LTEuNTQyOTY5LS43OTY4NzUtLjI2NTYyNS0xLjUyNzM0NC0uNTI3MzQ0LTIuMzIwMzEzLS43MTg3NS0xLjAyMzQzNy0uMjM0Mzc1LTIuMDU4NTkzLS40MTc5NjktMy4xMDE1NjItLjU0Njg3NS0uNzAzMTI1LS4xMDE1NjMtMS4zNzUtLjMxMjUtMi4wODk4NDQtLjM2NzE4Ny0uMzgyODEzIDAtLjc1LjA1NDY4Ny0xLjEyNS4wMzkwNjItLjM3ODkwNi0uMDE1NjI1LS43OTI5NjktLjExNzE4OC0xLjIxMDkzNy0uMTE3MTg4LS44ODY3MTkgMC0xLjc0MjE4OC4xODM1OTQtMi42MjEwOTQuMjUzOTA3LS44ODI4MTMuMDc0MjE5LTEuODE2NDA2LjExMzI4MS0yLjcxNDg0NC4yNjU2MjUtMS4zNzg5MDYuMjU3ODEyLTIuNzQyMTg4LjYwOTM3NS00LjA3ODEyNSAxLjA0Njg3NS0uNzMwNDY5LjIyMjY1Ni0xLjQ2NDg0NC4zODI4MTItMi4xNjc5NjkuNjU2MjUtMS40ODQzNzUuNjA1NDY5LTIuOTIxODc1IDEuMzI0MjE5LTQuMjk2ODc1IDIuMTUyMzQzLS41MTE3MTkuMjg5MDYzLTEuMDU0Njg3LjUwMzkwNy0xLjU1MDc4MS44MDA3ODItMS44NjcxODggMS4yMDcwMzEtMy42MDU0NjkgMi42MDU0NjgtNS4xODM1OTQgNC4xNzU3ODEtNi4wMzEyNSA1Ljk4ODI4MS05LjQxMDE1NiAxNC4xNDg0MzctOS4zODY3MTggMjIuNjQ4NDM3djQ4YzAgMTcuNjcxODc2LTE0LjMyNDIxOSAzMi0zMiAzMi0xNy42NzE4NzYgMC0zMi0xNC4zMjgxMjQtMzItMzJ2LTQ4Yy0uMDM5MDYzLTEyLjA4MjAzMS02Ljg5NDUzMi0yMy4xMDE1NjItMTcuNzEwOTM4LTI4LjQ4MDQ2OGwtLjQ4ODI4MS0uMjY1NjI1Yy0xLjI4MTI1LS42MDU0NjktMi42MDE1NjMtMS4xMjEwOTQtMy45NTMxMjUtMS41NDI5NjktLjc5Njg3NS0uMjY1NjI1LTEuNTI3MzQ0LS41MjczNDQtMi4zMjAzMTMtLjcxODc1LTEuMDIzNDM3LS4yMzQzNzUtMi4wNTg1OTMtLjQxNzk2OS0zLjEwMTU2Mi0uNTQ2ODc1LS43MDMxMjUtLjEwMTU2My0xLjM3NS0uMzEyNS0yLjA4OTg0NC0uMzY3MTg3LS43MTA5MzctLjA1NDY4OC0xLjUzNTE1Ni0uMDc4MTI2LTIuMzM1OTM3LS4wNzgxMjYtMTcuNjcxODc2IDAtMzIgMTQuMzI0MjE5LTMyIDMydjMyYy4wMTE3MTggOC40NzY1NjMtMy4zMzIwMzIgMTYuNjEzMjgyLTkuMzA0Njg4IDIyLjYyODkwNy03LjkyOTY4OCA3LjYzMjgxMi0xOS4xMzY3MTkgMTAuODEyNS0yOS44OTQ1MzEgOC40ODA0NjktMS45MTQwNjMtLjQwNjI1LTMuNzg5MDYzLS45ODQzNzYtNS41OTc2NTctMS43MzQzNzYtMy42NTYyNS0xLjYxMzI4MS02Ljk4ODI4MS0zLjg3NS05LjgzMjAzMS02LjY3OTY4Ny02LjAwNzgxMi02LjAyNzM0NC05LjM3NS0xNC4xOTE0MDYtOS4zNzEwOTMtMjIuNjk1MzEzem0yNCAyMDB2LTgwLjY2NDA2MmMuODAwNzgxLjEzMjgxMiAxLjYwMTU2Mi4xNjc5NjkgMi40MDIzNDMuMjYxNzE5bC42MTMyODEuMDY2NDA2YzcgLjcyMjY1NiAxNC4wNzQyMTktLjA5NzY1NiAyMC43MjI2NTctMi40MDIzNDQgMi4wMzEyNS0uNzE0ODQzIDQuMDE1NjI1LTEuNTY2NDA2IDUuOTMzNTkzLTIuNTQyOTY5LjQxMDE1Ny0uMTk5MjE4LjgwMDc4Mi0uNDE3OTY4IDEuMjI2NTYzLS42NDA2MjQgMS41NTA3ODEtLjg0Mzc1IDMuMDU4NTk0LTEuNzY5NTMyIDQuNTExNzE5LTIuNzc3MzQ0LjQ2NDg0NC0uMzE2NDA2LjkzMzU5NC0uNjEzMjgyIDEuMzkwNjI1LS45NDkyMTkgMTIuMjQ2MDkzLTguOTEwMTU2IDE5LjQwMjM0My0yMy4yMTA5MzcgMTkuMTk5MjE5LTM4LjM1MTU2M3YtMzJjLS4wMDc4MTMtNC4yNDYwOTMgMS42ODM1OTMtOC4zMTY0MDYgNC42OTUzMTItMTEuMzA0Njg3LjgwMDc4MS0uNzkyOTY5IDEuNjc5Njg4LTEuNTAzOTA2IDIuNjI1LTIuMTEzMjgxLjE2Nzk2OS0uMTAxNTYzLjM1MTU2Mi0uMTc1NzgyLjUxOTUzMS0uMjY5NTMyLjc4NTE1Ny0uNDgwNDY4IDEuNjA1NDY5LS44OTA2MjQgMi40NTcwMzEtMS4yMjY1NjIuMjUtLjA5Mzc1LjUwMzkwNy0uMTUyMzQ0Ljc1MzkwNy0uMjMwNDY5Ljc4MTI1LS4yNjU2MjUgMS41ODIwMzEtLjQ2NDg0MyAyLjM5ODQzNy0uNjAxNTYyLjM4MjgxMy0uMDYyNS44MDA3ODItLjA3ODEyNSAxLjE3NTc4Mi0uMTIxMDk0LjY3MTg3NC0uMDYyNSAxLjM0NzY1Ni0uMDg1OTM3IDIuMDIzNDM3LS4wNzAzMTMuNTAzOTA2LjAyMzQzOCAxLjAwNzgxMy4wNzQyMTkgMS41MDM5MDYuMTUyMzQ0LjYwMTU2My4wNzAzMTMgMS4xOTkyMTkuMTc5Njg4IDEuNzg1MTU3LjMyODEyNS4xOTkyMTguMDQ2ODc1LjM4MjgxMi4xMjEwOTQuNTc0MjE4LjE3NTc4MSA2Ljk3MjY1NiAyLjU0Mjk2OSAxMS41NzgxMjUgOS4yMTA5MzggMTEuNDg4MjgyIDE2LjYzMjgxM3Y0Ni42NDg0MzdjMCAyNi41MDc4MTMgMjEuNDkyMTg3IDQ4IDQ4IDQ4IDI2LjUxMTcxOCAwIDQ4LTIxLjQ5MjE4NyA0OC00OHYtNDhjMC01LjQzMzU5MyAyLjc2NTYyNC0xMC40OTIxODcgNy4zMzU5MzctMTMuNDI1NzgxLjEzNjcxOS0uMDg1OTM3LjI5Njg3NS0uMTQ0NTMxLjQzMzU5NC0uMjMwNDY5LjgxMjUtLjQ5NjA5MyAxLjY2NDA2Mi0uOTIxODc0IDIuNTUwNzgxLTEuMjY1NjI0LjIyNjU2Mi0uMDg1OTM4LjQ1NzAzMS0uMTM2NzE5LjY3OTY4OC0uMjA3MDMyLjc4NTE1Ni0uMjY1NjI1IDEuNTg1OTM3LS40NzY1NjIgMi40MDIzNDMtLjYyNS4zODI4MTMtLjA1NDY4Ny44MDA3ODEtLjA3ODEyNSAxLjE1MjM0NC0uMTEzMjgxLjY3MTg3NS0uMDY2NDA2IDEuMzUxNTYzLS4wODk4NDQgMi4wMzEyNS0uMDcwMzEzLjUwMzkwNi4wMjM0MzggMS4wMDM5MDYuMDc0MjE5IDEuNTAzOTA2LjE1MjM0NC42MDE1NjMuMDcwMzEzIDEuMTk1MzEzLjE3OTY4OCAxLjc4NTE1Ny4zMjgxMjUuMTk5MjE4LjA0Njg3NS4zODI4MTIuMTIxMDk0LjU3NDIxOC4xNzU3ODEgNi45OTYwOTQgMi41MjM0MzggMTEuNjMyODEzIDkuMTk1MzEzIDExLjU1MDc4MiAxNi42MzI4MTN2MTQuNjQ4NDM3YzAgMjYuNTA3ODEzIDIxLjQ5MjE4NyA0OCA0OCA0OCAyNi41MTE3MTggMCA0OC0yMS40OTIxODcgNDgtNDh2LTE2Yy0uMDA3ODEzLTQuMjQ2MDkzIDEuNjgzNTkzLTguMzE2NDA2IDQuNjk1MzEyLTExLjMwNDY4Ny44MDA3ODEtLjc5Mjk2OSAxLjY3OTY4OC0xLjUwMzkwNiAyLjYyNS0yLjExMzI4MS4xNjc5NjktLjEwMTU2My4zNTE1NjItLjE3NTc4Mi41MjczNDQtLjI4MTI1Ljc4MTI1LS40NzI2NTYgMS42MDE1NjItLjg3ODkwNiAyLjQ0OTIxOC0xLjIxNDg0NC4yNS0uMDkzNzUuNTExNzE5LS4xNTIzNDQuODAwNzgyLS4yMzA0NjkuNzY5NTMxLS4yNjU2MjUgMS41NTg1OTQtLjQ2NDg0MyAyLjM1OTM3NS0uNjAxNTYyLjM4MjgxMi0uMDYyNS44MDA3ODEtLjA3ODEyNSAxLjE3NTc4MS0uMTIxMDk0LjY3MTg3NS0uMDYyNSAxLjM0NzY1Ni0uMDg1OTM3IDIuMDIzNDM4LS4wNzAzMTMuNTAzOTA2LjAyMzQzOCAxLjAwNzgxMi4wNzQyMTkgMS41MDM5MDYuMTUyMzQ0LjYwMTU2Mi4wNzAzMTMgMS4xOTkyMTguMTc5Njg4IDEuNzg1MTU2LjMyODEyNS4xOTkyMTkuMDQ2ODc1LjM4MjgxMi4xMjEwOTQuNTc0MjE5LjE3NTc4MSA2Ljk2ODc1IDIuNTQ2ODc2IDExLjU3NDIxOSA5LjIxNDg0NCAxMS40ODA0NjkgMTYuNjMyODEzdjMwLjY0ODQzN2MtLjAxMTcxOSAxMi43NSA1LjA0Mjk2OCAyNC45ODQzNzYgMTQuMDU4NTkzIDM0LjAwNzgxMyAxLjU4NTkzOCAxLjU0Njg3NSAzLjI3NzM0NCAyLjk4NDM3NSA1LjA2MjUgNC4zMDQ2ODcuNTE5NTMxLjM3NSAxLjA1NDY4OC43MTA5MzggMS42MDE1NjMgMS4wNzAzMTMgMS4zNDM3NS45MTc5NjkgMi43MDMxMjUgMS43Njk1MzEgNC4xMTcxODcgMi41NDI5NjkuNTYyNS4zMDQ2ODcgMS4xMjEwOTQuNjAxNTYyIDEuNjg3NS44Nzg5MDYgMS42MTMyODEuODAwNzgxIDMuMjY1NjI1IDEuNTExNzE5IDQuOTUzMTI1IDIuMTI4OTA2LjMzNTkzOC4xMjEwOTQuNjY0MDYzLjI3MzQzOCAxLjAwNzgxMy4zODY3MTkgNC4zOTA2MjUgMS40OTYwOTQgOC45Njg3NSAyLjM1OTM3NSAxMy42MDE1NjIgMi41NTg1OTRoLjA1NDY4OGMyLjIzMDQ2OS4wODk4NDMgNC40NjQ4NDMuMDIzNDM3IDYuNjg3NS0uMTk5MjE5bC44MDA3ODEtLjA4OTg0NGMuODAwNzgxLS4wODU5MzcgMS42MDE1NjItLjEyMTA5NCAyLjQwMjM0NC0uMjUzOTA2djgwLjY2NDA2MnptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTI0MC4zOTg0MzggMTExLjc4OTA2MmMyMi4wODIwMzEtLjAyNzM0MyAzOS45NzY1NjItMTcuOTIxODc0IDQwLTQwIDAtMTkuMjAzMTI0LTI3LjgzMjAzMi02MC40NzI2NTYtMzMuNDE0MDYzLTY4LjU0Njg3NC0xLjU3NDIxOS0yLjA0Mjk2OS00LjAwMzkwNi0zLjI0MjE4OC02LjU4NTkzNy0zLjI0MjE4OC0yLjU3ODEyNiAwLTUuMDExNzE5IDEuMTk5MjE5LTYuNTgyMDMyIDMuMjQyMTg4LTUuNTg1OTM3IDguMDc0MjE4LTMzLjQxNzk2OCA0OS4zNDM3NS0zMy40MTc5NjggNjguNTQ2ODc0LjAyNzM0MyAyMi4wNzgxMjYgMTcuOTIxODc0IDM5Ljk3MjY1NyA0MCA0MHptMC04OS41MzkwNjJjMTEuNTExNzE4IDE3Ljk5MjE4OCAyNCA0MC44MDA3ODEgMjQgNDkuNTM5MDYyIDAgMTMuMjUzOTA3LTEwLjc0MjE4OCAyNC0yNCAyNC0xMy4yNTM5MDcgMC0yNC0xMC43NDYwOTMtMjQtMjQgMC04LjczODI4MSAxMi40ODgyODEtMzEuNTQ2ODc0IDI0LTQ5LjUzOTA2MnptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTM3Ni4zOTg0MzggMTI3Ljc4OTA2MmMyMi4wODIwMzEtLjAyNzM0MyAzOS45NzY1NjItMTcuOTIxODc0IDQwLTQwIDAtMTkuMjAzMTI0LTI3LjgzMjAzMi02MC40NzI2NTYtMzMuNDE0MDYzLTY4LjU0Njg3NC0xLjU3NDIxOS0yLjA0Mjk2OS00LjAwMzkwNi0zLjI0MjE4OC02LjU4NTkzNy0zLjI0MjE4OC0yLjU3ODEyNiAwLTUuMDExNzE5IDEuMTk5MjE5LTYuNTgyMDMyIDMuMjQyMTg4LTUuNTg1OTM3IDguMDc0MjE4LTMzLjQxNzk2OCA0OS4zNDM3NS0zMy40MTc5NjggNjguNTQ2ODc0LjAyNzM0MyAyMi4wNzgxMjYgMTcuOTIxODc0IDM5Ljk3MjY1NyA0MCA0MHptMC04OS41MzkwNjJjMTEuNTExNzE4IDE3Ljk5MjE4OCAyNCA0MC44MDA3ODEgMjQgNDkuNTM5MDYyIDAgMTMuMjUzOTA3LTEwLjc0MjE4OCAyNC0yNCAyNC0xMy4yNTM5MDcgMC0yNC0xMC43NDYwOTMtMjQtMjQgMC04LjczODI4MSAxMi40ODgyODEtMzEuNTQ2ODc0IDI0LTQ5LjUzOTA2MnptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0ibTEwNC4zOTg0MzggMTI3Ljc4OTA2MmMyMi4wODIwMzEtLjAyNzM0MyAzOS45NzY1NjItMTcuOTIxODc0IDQwLTQwIDAtMTkuMjAzMTI0LTI3LjgzMjAzMi02MC40NzI2NTYtMzMuNDE0MDYzLTY4LjU0Njg3NC0xLjU3NDIxOS0yLjA0Mjk2OS00LjAwMzkwNi0zLjI0MjE4OC02LjU4NTkzNy0zLjI0MjE4OC0yLjU3ODEyNiAwLTUuMDExNzE5IDEuMTk5MjE5LTYuNTgyMDMyIDMuMjQyMTg4LTUuNTg1OTM3IDguMDc0MjE4LTMzLjQxNzk2OCA0OS4zNDM3NS0zMy40MTc5NjggNjguNTQ2ODc0LjAyNzM0MyAyMi4wNzgxMjYgMTcuOTIxODc0IDM5Ljk3MjY1NyA0MCA0MHptMC04OS41MzkwNjJjMTEuNTExNzE4IDE3Ljk5MjE4OCAyNCA0MC44MDA3ODEgMjQgNDkuNTM5MDYyIDAgMTMuMjUzOTA3LTEwLjc0MjE4OCAyNC0yNCAyNC0xMy4yNTM5MDcgMC0yNC0xMC43NDYwOTMtMjQtMjQgMC04LjczODI4MSAxMi40ODgyODEtMzEuNTQ2ODc0IDI0LTQ5LjUzOTA2MnptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+Cg=="
                alt=""
                height="40"
              />
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
                        <div className="white-text">FLOWER                        
                          <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
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
                        <div className="white-text">CAKES                    
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
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
                        <div className="white-text">GIFTS                   
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
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
                        <div className="white-text">ANNIVERSARY                
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
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
                        <div className="white-text">PLANTS
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span></div>     
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
                        <div className="white-text">BIRTHDAY   
                        <span class="uk-margin-xsmall-left uk-icon" uk-icon="icon: chevron-down; ratio: .75;"><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#fff" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg></span>
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
                    <div className="md-form my-0 white-text">
                      <input
                        className="form-control mr-sm-2 pt-2 white-text"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <NavLink
                      onClick={this.toggle}
                      to="#"
                    >
                      <a class="uk-navbar-toggle tm-navbar-button uk-search-icon uk-icon white-text"
                        href="#" uk-search-icon="" aria-expanded="false">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#fff" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#fff" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>
                      </a>
                    </NavLink>
                  </FormInline>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => this.toggle(2)}
                    dark
                    to="#"
                  >
                    <a class="uk-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle> <path fill="none" stroke="#fff" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>
                    </a>
                  </NavLink>
                  <MDBModal
                    isOpen={this.state.modal2}
                    toggle={() => this.toggle(2)}
                    // isOpen={this.state.modal}
                    // toggle={this.toggle}
                    className="cascading-modal"
                  >
                    <div className="modal-header grey darken-4-color white-text">
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
                    dark
                    to="#"
                  >
                    <a>
                      <span uk-icon="cart" class="uk-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="white" cx="7.3" cy="17.3" r="1.4"></circle> <circle fill="white" cx="13.3" cy="17.3" r="1.4"></circle> <polyline fill="none" stroke="#fff" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg></span><span class="uk-badge">2
                        </span>
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
        </Row>

        </div>
      </Router>
    );
  }
}

export default App;
