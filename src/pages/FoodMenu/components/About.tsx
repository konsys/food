import React from "react";

interface Props {}

export const About = (props: Props) => {
  return (
    <section className="abouts">
      <div className="container">
        <div className="row">
          <div className="abouts_content">
            <div className="col-md-6">
              <div
                className="single_abouts_text text-center wow slideInLeft"
                data-wow-duration="1s"
              >
                <img src="assets/images/ab.png" alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="single_abouts_text wow slideInRight"
                data-wow-duration="1s"
              >
                <h4>About us</h4>
                <h3>WE ARE TASTY</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's stan
                </p>

                <p>
                  dard dummy text ever since the 1500s,when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesettingdard dummy text ever since the
                  1500s,when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
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
    </section>
  );
};
