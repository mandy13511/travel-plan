import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiCalendar, FiEdit, FiDownload } from "react-icons/fi";
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
        <div>
          <span className="navbar-btn">
            <IoIosMenu />
          </span>
        </div>
      );
    } else {
      /* desktop view */
      return (
        <div>
          <div className="navbar-btn" onClick={this.showModal}><FiCalendar/></div>
          <div className="navbar-btn active"><FiEdit/></div>
          <div className="navbar-btn"><FiDownload/></div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        {this.switchView()}
        <EditModal travel={this.props.travel} show={this.state.showModal} handleClose={this.hideModal}/>
      </div>
    );
  }
}
