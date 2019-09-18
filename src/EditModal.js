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
          /*element.map((item, itemIndex) => {
            return (
              <tr>
                {itemIndex === 0 ? (
                  <th rowspan={element.length}>Day {index + 1}</th>
                ) : (
                  ""
                )}
                <td>{itemIndex + 1 + ". " + item.place}</td>
              </tr>
            );
          });*/
        })}
      </table>
    );
  }

  buildTableHeader() {}

  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <span className="text-l">Add new place</span>
          </div>
          <div className="modal-body">{this.createTabel()}</div>
          <div class="modal-footer">
            <span className="text-m">Modal Footer</span>
          </div>
        </div>
      </div>
    );
  }
}
