import React from "react";
import "./styles.scss";

interface Props {}

export const Contacts = (props: Props) => {
  return (
    <>
      <div className="contact-imfo-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <i className="fa fa-volume-control-phone" />
              <div className="overflow-hidden">
                <h4>Phone</h4>
                <p className="lead">+01 123-456-4590</p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa fa-envelope" />
              <div className="overflow-hidden">
                <h4>Email</h4>
                <p className="lead">yourmail@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <i className="fa fa-map-marker" />
              <div className="overflow-hidden">
                <h4>Location</h4>
                <p className="lead">800, Lorem Street, US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
