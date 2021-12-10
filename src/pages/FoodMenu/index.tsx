import React, { ReactElement } from "react";

interface Props {
  text: string;
}

export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <div>
      {/* <div className="preloader">
        <div className="loaded">&nbsp;</div>
      </div> */}
      <header id="home" className="navbar-fixed-top">
        <div className="header_top_menu clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-offset-3 col-sm-12 text-right">
                <div className="call_us_text">
                  <a href="">
                    <i className="fa fa-clock-o"></i> Order Foods 24/7
                  </a>
                  <a href="">
                    <i className="fa fa-phone"></i>061 9876 5432
                  </a>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="head_top_social text-right">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-phone"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-camera"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_menu_bg">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand our_logo" href="#">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>

                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="#slider">Home</a>
                      </li>
                      <li>
                        <a href="#abouts">Menu</a>
                      </li>
                      <li>
                        <a href="#features">Features</a>
                      </li>
                      <li>
                        <a href="#portfolio">Delivery</a>
                      </li>
                      <li>
                        <a href="#ourPakeg">News</a>
                      </li>
                      <li>
                        <a href="#mobaileapps">Pages</a>
                      </li>
                      <li>
                        <a href="#" className="booking">
                          Table Booking
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="slider" className="slider">
        <div className="slider_overlay">
          <div className="container">
            <div className="row">
              <div className="main_slider text-center">
                <div className="col-md-12">
                  <div
                    className="main_slider_content wow zoomIn"
                    data-wow-duration="1s"
                  >
                    <h1>Foody Love</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi.
                    </p>
                    <button className="btn-lg">Click here</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="abouts" className="abouts">
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    stan
                  </p>

                  <p>
                    dard dummy text ever since the 1500s,when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesettingdard dummy text
                    ever since the 1500s,when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting
                  </p>

                  <a href="" className="btn btn-primary">
                    click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
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
                          printer took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only five
                          centuries, but also the leap into electronic
                          typesettingdard dummy text ever since the 1500s,when
                          an unknown printer took a galley of type and scrambled
                          it to make a type specimen book. It has survived not
                          only five centuries, but also the leap into electronic
                          typesetting
                        </p>

                        <a href="" className="btn btn-primary">
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

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div
              className="portfolio_content text-center  wow fadeIn"
              data-wow-duration="5s"
            >
              <div className="col-md-12">
                <div className="head_title text-center">
                  <h4>Delightful</h4>
                  <h3>Experience</h3>
                </div>

                <div className="main_portfolio_content">
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p1.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p2.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p3.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p4.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p5.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p6.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p7.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
                    <img src="assets/images/p8.png" alt="" />
                    <div className="portfolio_images_overlay text-center">
                      <h6>Italian Source Mushroom</h6>
                      <p className="product_price">$12</p>
                      <a href="" className="btn btn-primary">
                        Click here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ourPakeg" className="ourPakeg">
        <div className="container">
          <div className="main_pakeg_content">
            <div className="row">
              <div className="head_title text-center">
                <h4>Amazing</h4>
                <h3>Delicious</h3>
              </div>

              <div className="single_pakeg_one text-right wow rotateInDownRight">
                <div className="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4">
                  <div className="single_pakeg_text">
                    <div className="pakeg_title">
                      <h4>Drinks</h4>
                    </div>

                    <ul>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="single_pakeg_two text-left wow rotateInDownLeft">
                <div className="col-md-6 col-sm-8">
                  <div className="single_pakeg_text">
                    <div className="pakeg_title">
                      <h4>Main course </h4>
                    </div>

                    <ul>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="single_pakeg_three text-left wow rotateInDownRight">
                <div className="col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-4">
                  <div className="single_pakeg_text">
                    <div className="pakeg_title">
                      <h4>Desserts</h4>
                    </div>

                    <ul>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                      <li>
                        Tuna Roast
                        Source........................................................$24.5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

                    <a href="">
                      <img src="assets/images/google.png" alt="" />
                    </a>
                    <a href="">
                      <img src="assets/images/apps.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer_widget" className="footer_widget">
        <div className="container">
          <div className="row">
            <div className="footer_widget_content text-center">
              <div className="col-md-4">
                <div
                  className="single_widget wow fadeIn"
                  data-wow-duration="2s"
                >
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
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-youtube"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-phone"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-camera"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="single_widget wow fadeIn"
                  data-wow-duration="4s"
                >
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
                <div
                  className="single_widget wow fadeIn"
                  data-wow-duration="5s"
                >
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

      <div className="scrollup">
        <a href="#">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}
