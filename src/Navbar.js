import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";
import EditModal from "./EditModal";

import "./styles.scss";
import "./mbStyles.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: props.width, showModal: false };
  }

  componentWillMount() {
    this.setState({ width: window.innerWidth });
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  switchView() {
    if (this.state.width <= 460) {
      /* mobile view */
      return (
        <div className="navbar">
          <span className="navbar-btn">
            <IoIosMenu />
          </span>
        </div>
      );
    } else {
      /* desktop view */
      return (
        <div className="navbar">
          <span className="navbar-btn navbar-l" onClick={this.showModal}>Add new place</span>
          <span className="navbar-btn navbar-l">Save as PDF</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.switchView()}
        <EditModal travel={this.props.travel} show={this.state.showModal} handleClose={this.hideModal}/>
      </div>
    );
  }
}
