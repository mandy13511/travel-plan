import React, { Component } from "react";
import { IoIosMenu } from "react-icons/io";
import { FiCalendar, FiEdit, FiDownload, FiSave, FiFolder } from "react-icons/fi";
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

  handleClick() {
    let element = document.getElementById("loadFile");
    element.click();
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
          <span className = "navbar-btn">
            <IoIosMenu />
          </span>
        </div>
      );
    } else {
      /* desktop view */
      return (
        <div>
          <div className = "navbar-btn" onClick = {this.handleClick}>
            <input  id = "loadFile"
                    type="file"
                    accept = ".txt"
                    onChange = {this.loadTravelPlan}
                    style={{display: "none"}}/>
            <FiFolder/>
          </div>
          <div className = "navbar-btn active" onClick = {() => this.props.setPage("calendar")}><FiCalendar/></div>
          <div className = "navbar-btn" onClick = {() => this.props.setPage("edit")}><FiEdit/></div>
          <div className = "navbar-btn" onClick = {this.saveTravelPlan}><FiSave/></div>
          <div className = "navbar-btn"><FiDownload/></div>
        </div>
      );
    }
  }

  loadTravelPlan = (event) => {
    var f = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
      this.props.update(event.target.result);
    }
    reader.readAsText(f);
  }

  saveTravelPlan = () => {
    /* create an element <a> and save the text file by setting download attributes */
    let element = document.createElement('a');
    alert(this.props.travel);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.props.travelPlan)));
    element.setAttribute('download', "travelPlan.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  render() {
    return (
      <div className = "navbar">
        {this.switchView()}
        <EditModal travel = {this.props.travel} show = {this.state.showModal} handleClose = {this.hideModal}/>
      </div>
    );
  }
}
