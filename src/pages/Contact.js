import React from "react";
import Hero from "../component/Hero";
import Layout from "../component/Layout";
import ContactForm from "../component/ContactForm";
import { Container } from "@mui/material";
import BG from "../component/BG";

const Contact = () => {
  return (
    <Layout>
      <Hero
        imgSrc="contact/bulb_mhvflb.jpg"
        h1="Contact Us"
        lead="We would love to hear from you! Contact Kaiserlowe's dedicated team of construction professionals today to discuss your project needs and how we can help bring your vision to life."
      />
      <main>
        <BG
          overlay="rgba(0, 0, 0, 0.7)"
          py="3rem"
          imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/contact/telephone_idr9uu.webp"
        >
          <Container maxWidth="sm">
            <ContactForm />
          </Container>
        </BG>
      </main>
    </Layout>
  );
};

export default Contact;
