import React, { Component } from "react";

import "./styles.scss";
import "./mbStyles.scss";

export default class EditModal extends Component {
  constructor(props) {
    super(props);
  }

  createTabel() {
    return (
      <table>
        <tbody>
        {this.props.travel.map((element, index) => {
          return (
            <tr>
              <th>Day {index + 1}</th>
              <td>
                <ol>
                  {element.map((item, itemIndex) => {
                    return <li>{item.place}</li>;
                  })}
                </ol>
              </td>
              <td>123</td>
            </tr>
          );
        })}
        </tbody>
      </table>
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
          <div className="modal-body">{this.createTabel()}</div>
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
