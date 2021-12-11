import React, { ReactElement } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { FooterWidget } from "./components/FooterWidget";
import { MenuBlock } from "./components/MenuBlock";
import { MobileApp } from "./components/MobileApp";
import { Portfolio } from "./components/Portfolio";
import { Slider } from "./components/Slider";

interface Props {
  text: string;
}

export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <div>
      {/* <div className="preloader">
        <div className="loading"/>
      </div> */}

      <Header />
      <Slider />
      <About />
      <Features />
      <Portfolio />
      <MenuBlock />
      <MobileApp />
      <FooterWidget />
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
        <a href="/test">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}
