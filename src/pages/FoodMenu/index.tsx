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

const foodItems = [
  {
    name: "Special Drinks 1",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-01.jpg"
  },
  {
    name: "Special Drinks 2",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-02.jpg"
  },
  {
    name: "Special Drinks 3",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-03.jpg"
  },
  {
    name: "Special Drinks 4",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-04.jpg"
  },
  {
    name: "Special Drinks 5",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-05.jpg"
  },
  {
    name: "Special Drinks 6",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-06.jpg"
  },
  {
    name: "Special Drinks 4",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-07.jpg"
  },
  {
    name: "Special Drinks 5",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-08.jpg"
  },
  {
    name: "Special Drinks 6",
    description: "Sed id magna vitae eros sagittis euismod.",
    price: "$9.79",
    img: "images/img-09.jpg"
  }
];
export default function FoodMenu({ text }: Props): ReactElement {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Qt />
      <MenuBlock foodItems={foodItems} />
      <Gallery />
      <CustomerReview />
      <Contacts />
      <Footer />
      <ScrollButton />
    </>
  );
}
