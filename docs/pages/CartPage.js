import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputSelect,
  Button,
  Modal,
  ModalBody,
} from "mdbreact";
import DocsLink from "./DocsLink";
const NavLink = require("react-router-dom").NavLink;



class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
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
        <h4 className="mt-4">Frame modal</h4>
        <Button color="warning" onClick={() => this.toggle(10)}>
          Bottom
        </Button>
        <Modal
          isOpen={this.state.modal10}
          toggle={() => this.toggle(10)}
          frame
          position="bottom"
        >
          <ModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Button color="secondary" onClick={() => this.toggle(10)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalBody>
        </Modal>          
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CartPage;
