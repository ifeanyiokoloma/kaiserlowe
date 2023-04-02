import React from "react";
import Navbar from "./navbar/Navbar";
import { Footer } from "./Footer";
import Contact from "./Contact";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
