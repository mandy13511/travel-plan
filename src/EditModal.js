import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./styles.scss";
import "./mbStyles.scss";
import DragDropTravelList from "./DragDropList"

export default class EditModal extends Component {
  constructor(props) {
    super(props);
  }

  createTabel() {
    return (
        <div>
        {this.props.travel.map((element, index) => {
          return(
            <div className = "container row block">
              <div className = "tb-header">Day {index + 1}</div>
              <div className = "tb-col">
                {element.map((item, itemIndex) => {
                  return <div className = "list">{(itemIndex+1) + ". " + item.place}</div>;
                })}
              </div>
            </div>
          );
        })}
        </div>

    );
  }

  render() {
    if(this.props.show){
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.props.handleClose}>&times;</span>
            <span className="text-l">Add new place</span>
          </div>
          <div className="modal-body">
            <div className = "container right">
              <button>Add below</button>
              <button>Delete</button>
            </div>
            <DragDropTravelList/>
          </div>
          <div className="modal-footer">
            <span className="text-m">Modal Footer</span>
          </div>
        </div>
      </div>
    );
    }
    else{
      return <div></div>;
    }
  }
}
