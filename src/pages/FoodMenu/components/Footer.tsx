import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer id="footer" className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright wow zoomIn" data-wow-duration="3s">
              <p>
                Made with <i className="fa fa-heart"></i> by
                <a href="http://bootstrapthemes.co">Bootstrap Themes</a>2016.
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
