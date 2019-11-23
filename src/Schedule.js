import React, { Component } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import "./styles.scss";
import "./mbStyles.scss";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    var toggleData = this.props.travel.map((elem) => true);
    this.state = {
      expandList: toggleData
    }
  }

  toggleDay = (pIndex) => {
    var expand = this.state.expand
    this.setState(prevState => {
      const expandList = prevState.expandList;
      expandList[pIndex] = !expandList[pIndex]
      return {
        expandList: expandList,
      };
    });
  }

  render() {
    return (
      <div className="schedule">
        {this.props.travel.map((day, index) => {
          return (
            <div>
              {/*<div className="schedule-day">Day {index + 1}</div>*/}
              <div className = "schedule-day">
                <div className = "dot bold">
                {(this.state.expandList[index] == true ? <FiMinus/> : <FiPlus/>)}                
                </div>
                <div className = "schedule-title" onClick = {() => this.toggleDay(index)}>
                  Day {index + 1}
                </div>
              </div>
              {this.state.expandList[index] == true && day.map(place => {
                return (
                  <div className = {(this.props.currentSection == place.place ? "active" : "")}>
                    <div className = "schedule-container">
                      <div className = "dot"/>
                      <div className = "schedule-title">
                        {/*href={"#" + place.place}*/}
                        {/*onClick ={() =>this.scrollToElement(place.place)}*/}
                        <a href = {"#" + place.place} onClick = {() => this.props.setCurrentSection(place.place)}>{place.place}</a>
                      </div>
                    </div>
                    <div className = "schedule-content">{place.time}</div>
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
