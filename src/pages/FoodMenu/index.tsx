import React, { ReactElement } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { MenuBlock } from "./components/MenuBlock";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { ScrollButton } from "./components/ScrollButton";
import { Qt } from "./components/Qt";
import { Gallery } from "./components/Gallery";
import { CustomerReview } from "./components/CustomerReview";
import { Contacts } from "./components/Contacts";

interface Props {
  text: string;
}

export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <About />
        <Qt />
        <MenuBlock />
        <Gallery />
        <CustomerReview />
        <Contacts />
        <Footer />
        <ScrollButton />
      </div>
    </>
  );
}
