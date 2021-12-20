import { Slider } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Footer } from "./Footer";
import { ScrollButton } from "./ScrollButton";

interface Props {}

export const Template = (props: Props) => {
  return (
    <>
      <Header />
      <Slider />
      Template
      <Footer />
      <ScrollButton />
    </>
  );
};
