import React from "react";
import "./styles.scss";

interface Props {}

export const Slider = (props: Props) => {
  return (
    <>
      <div className="cover-slides">
        <div className="overlay-background" />
        <img src="images/slider-01.jpg" alt="" />

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="m-b-20">
                <strong>
                  Welcome To <br />
                  Yamifood Restaurant
                </strong>
              </h1>
              <p>
                See how your users experience your website in realtime or view
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
      </div>
    </>
  );
};
