import React from 'react'
import Hero from '../component/Hero'
import Layout from '../component/Layout'

const Contact = () => {
  return (
    <Layout>
      <Hero
        imgSrc="contact/bulb_mhvflb.jpg"
        h1="Contact Us"
        lead="We would love to hear from you! Contact Kaiserlowe's dedicated team of construction professionals today to discuss your project needs and how we can help bring your vision to life."
      />
    </Layout>
  );
}

export default Contact