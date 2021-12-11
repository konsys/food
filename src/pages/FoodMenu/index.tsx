import React, { ReactElement } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { FooterWidget } from "./components/FooterWidget";
import { MenuBlock } from "./components/MenuBlock";
import { MobileApp } from "./components/MobileApp";
import { Portfolio } from "./components/Portfolio";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { ScrollButton } from "./components/ScrollButton";

interface Props {
  text: string;
}

export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <>
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
      <Footer />
      <ScrollButton />
    </>
  );
}
