import React from "react";

interface Props {}

export const MobileApp = (props: Props) => {
  return (
    <section id="mobaileapps" className="mobailapps">
      <div className="slider_overlay">
        <div className="container">
          <div className="row">
            <div className="main_mobail_apps_content wow zoomIn">
              <div className="col-md-5 col-sm-12 text-center">
                <img src="assets/images/iphone.png" alt="" />
              </div>
              <div className="col-md-7 col-sm-12">
                <div className="single_monail_apps_text">
                  <h4> Happy to Announce </h4>
                  <h1>
                    Mobile App <span>is Available in every OS platform.</span>
                  </h1>

                  <a href="/test">
                    <img src="assets/images/google.png" alt="" />
                  </a>
                  <a href="/test">
                    <img src="assets/images/apps.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
