import React from "react";

interface Props {}

export const Features = (props: Props) => {
  return (
    <section className="features">
      <div className="slider_overlay">
        <div className="container">
          <div className="row">
            <div
              className="main_features_content_area  wow fadeIn"
              data-wow-duration="3s"
            >
              <div className="col-md-12">
                <div className="main_features_content text-left">
                  <div className="col-md-6">
                    <div className="single_features_text">
                      <h4>Special Recipes</h4>
                      <h3>Taste of Precious</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's stan
                      </p>
                      <p>
                        dard dummy text ever since the 1500s,when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic
                        typesettingdard dummy text ever since the 1500s,when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting
                      </p>

                      <a href="/test" className="btn btn-primary">
                        click here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
