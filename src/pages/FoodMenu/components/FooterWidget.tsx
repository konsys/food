import React from "react";

interface Props {}

export const FooterWidget = (props: Props) => {
  return (
    <section id="footer_widget" className="footer_widget">
      <div className="container">
        <div className="row">
          <div className="footer_widget_content text-center">
            <div className="col-md-4">
              <div className="single_widget wow fadeIn" data-wow-duration="2s">
                <h3>Take it easy with location</h3>

                <div className="single_widget_info">
                  <p>
                    112-Legere ancillae vix ne.
                    <span>Te elit putent propriae eum,</span>
                    <span>aliquip nominati</span>
                    <span className="phone_email">phone: 00 000 000</span>
                    <span>Email: support@templatemela.com</span>
                  </p>
                </div>

                <div className="footer_socail_icon">
                  <a href="/test">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-phone"></i>
                  </a>
                  <a href="/test">
                    <i className="fa fa-camera"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single_widget wow fadeIn" data-wow-duration="4s">
                <h3>Take it easy with location</h3>

                <div className="single_widget_info">
                  <p>
                    <span className="date_day">Monday To Friday</span>
                    <span>8:00am to 10:00pm(Breakfast)</span>
                    <span>11:00am to 10:00pm(Lunch/Diner)</span>

                    <span className="date_day">Saturday & Sunday</span>
                    <span>10:00am to 11:00pm(Brunch)</span>
                    <span>11:00am to 12:00pm(Lunch/Dinner)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="single_widget wow fadeIn" data-wow-duration="5s">
                <h3>Take it easy with location</h3>

                <div className="single_widget_form text-left">
                  <form action="#" id="formid">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="first name"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={3}
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      value="click here"
                      className="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
