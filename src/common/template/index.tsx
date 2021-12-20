import React from "react";
import { Contacts } from "../../pages/Contacts";
import { About } from "./About";
import { CustomerReview } from "./CustomerReview";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Qt } from "./Qt";
import { ScrollButton } from "./ScrollButton";
import { Slider } from "./Slider";

interface Props {
  children: any;
}

export const Template = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Qt />
      {/* <MenuBlock foodItems={foodItems} /> */}
      <Gallery />
      <CustomerReview />
      <Contacts />
      <Footer />
      <ScrollButton />
    </>
  );
};
