import React from "react";
import { Brands } from "./Brands";
import { Carousel } from "./Carousel";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Styles from "./Home.module.css";
import { Why } from "./Why";

export const Home = () => {
  return (
    <div>
      <Header />
      <br />
      <Carousel />
      <br />\
      <Brands />
      <br />
      <Why />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  );
};
