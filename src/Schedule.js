import React, { Component } from "react";

import "./styles.scss";
import "./mbStyles.scss";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  scrollPanel() {}

  render() {
    return (
      <div className="schedule">
        {this.props.travel.map((day, index) => {
          return (
            <div>
              <div className="schedule-day">Day {index + 1}</div>
              {day.map(place => {
                return (
                  <div className="schedule-item">
                    <div className=" schedule-header">
                      <div className="dot" />
                      <div
                        className="schedule-title"
                        onClick={this.scrollPanel}
                      >
                        <a href={"#" + place.place}>{place.place}</a>
                      </div>
                    </div>
                    <div className="schedule-content">{place.time}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
