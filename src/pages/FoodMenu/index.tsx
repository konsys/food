import React, { ReactElement } from "react";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { MenuBlock } from "./components/MenuBlock/MenuBlock";
import { Slider } from "./components/Slider/Slider";
import { Footer } from "./components/Footer/Footer";
import { ScrollButton } from "./components/ScrollButton/ScrollButton";
import { Qt } from "./components/Qt/Qt";
import { Gallery } from "./components/Gallery/Gallery";
import { CustomerReview } from "./components/CustomerReview/CustomerReview";
import { Contacts } from "./components/Contacts/Contacts";

interface Props {
  text: string;
}

export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <>
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
    </>
  );
}
