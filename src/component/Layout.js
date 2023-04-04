import React from "react";
import Navbar from "./navbar/Navbar";
import { Footer } from "./Footer";
import Contact from "./Contact";
import { ScrollRestoration } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
