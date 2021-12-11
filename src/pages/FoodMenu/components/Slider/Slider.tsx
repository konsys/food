import React from "react";
import "./styles.scss";

interface Props {}

export const Slider = (props: Props) => {
  return (
    <>
      <div id="slides" className="cover-slides">
        <ul className="slides-container">
          <li className="text-center">
            <div className="overlay-background" />
            <img src="images/slider-01.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20">
                    <strong>
                      Welcome To <br />
                      Yamifood Restaurant
                    </strong>
                  </h1>
                  <p className="m-b-40">
                    See how your users experience your website in realtime or
                    view
                    <br />
                    trends to see any changes in performance over time.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-circle btn-outline-new-white"
                      href="/test-root"
                    >
                      Reservation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="slides-navigation">
          <a href="/test-root" className="next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
          <a href="/test-root" className="prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
};
