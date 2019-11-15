import React, { Component } from "react";
import { IoMdLink, IoIosPin, IoMdCash, IoIosCall } from "react-icons/io";
import { FiMapPin, FiPhoneCall, FiLink2, FiCreditCard } from "react-icons/fi";

import "./styles.scss";
import "./mbStyles.scss";

export default class Attractions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const address = "https://maps.google.com/?q=" + this.props.travel.address;
    return (
      <div id={this.props.travel.place} className = "scrollpy" style = {{padding: "0.2rem"}}>
        <div  className="panel">
        {/* Image */}
        { (this.props.travel.img.length > 0) && (
          <div className="panel-container row">
            <div>
              <img className="img img-l" src={this.props.travel.img[0]} alt="" />
            </div>
            <div className = "img-thumb">
              {this.props.travel.img.map((imgPath, index) => {
                if (index !== 0) {
                  return <img className="img img-s" src={imgPath} alt="" />;
                }
              })}
            </div>
          </div>
        )}
        {/* Information */}
        <div className="panel-container">
          <div className="header text-l">{this.props.travel.place}</div>
          <div className="text-s line-s">
            {this.props.travel.address !== "" && (
              <div className="panel-note-list">
                <FiMapPin />
                <a
                  className="panel-note-list-text"
                  href={address}
                  target="_blank"
                >
                  {this.props.travel.address}
                </a>
              </div>
            )}
            {this.props.travel.phone !== "" && (
              <div className="panel-note-list">
                <FiPhoneCall />
                <div className="panel-note-list-text">
                  {this.props.travel.phone}
                </div>
              </div>
            )}
            {this.props.travel.price !== "" && (
              <div className="panel-note-list">
                <FiCreditCard />
                <div className="panel-note-list-text">
                  {this.props.travel.price}
                </div>
              </div>
            )}
            <div className="panel-note-list">
              {this.props.travel.link.length > 0 && (<FiLink2 />)}
              <div>
                {this.props.travel.link.map((i, index) => {
                  return (
                    <li key={index} className="panel-note-list-text">
                      <a href={i[1]}>
                        {i[0]}
                        <br />
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="panel-note-container text-m">
            {this.props.travel.note}
          </p>
        </div>
        </div>
      </div>
    );
  }
}
