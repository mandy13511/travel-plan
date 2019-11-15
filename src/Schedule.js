import React, { Component } from "react";

import "./styles.scss";
import "./mbStyles.scss";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  scrollToElement(pPlaceName) {
    var pageElement = document.getElementById(pPlaceName);

    var positionX = 0,
        positionY = 0;


        positionX += pageElement.offsetLeft;
        positionY += pageElement.offsetTop;
        pageElement = pageElement.offsetParent;
        window.scrollTo(positionX, 1200);

    pageElement.scrollIntoView();
    alert(positionY);

  }

  render() {
    return (
      <div className="schedule">
        {this.props.travel.map((day, index) => {
          return (
            <div>
              {/*<div className="schedule-day">Day {index + 1}</div>*/}
              {day.map(place => {
                return (
                  <div className="schedule-item">
                    <div className=" schedule-header">
                      <div className="dot" />
                      <div className="schedule-title">
                        {/*href={"#" + place.place}*/}
                        {/*onClick ={() =>this.scrollToElement(place.place)}*/}
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
