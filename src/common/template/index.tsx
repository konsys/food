import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollButton } from "./ScrollButton";
import { SpecialHeader } from "./SpecialHeader";

interface Props {
  specialHeaderTitle: string;
  children: any;
}

export const Template = ({ children, specialHeaderTitle }: Props) => {
  return (
    <>
      <Header />
      <SpecialHeader specialHeaderTitle={specialHeaderTitle} />
      {children}
      <Footer />
      <ScrollButton />
    </>
  );
};
