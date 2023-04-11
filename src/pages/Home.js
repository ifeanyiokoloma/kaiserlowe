import React from "react";
import SlidingHero from "../component/SlidingHero";
import About from "../component/About";
import Training from "../component/Training";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";
import MobilePortfolio from "../component/MobilePortfolio";
import Team from "../component/Team";
import Layout from "../component/Layout";
import BG from "../component/BG";
import { portfolio } from "../asset/content";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SlidingHero />
      <About />
      <BG imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp">
        <Training
          extraBtn
          headerColor="white"
          headerLineColor="var(--primary)"
          header={t("Training")}
        />
      </BG>
      <Services />
      <BG
        imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp"
        display={{ xs: "none", lg: "block" }}
      >
        <Portfolio content={portfolio} btn header />
      </BG>
      <BG
        imagename="https://res.cloudinary.com/kaiserlowe/image/upload/w_auto,c_fill/v1679359338/kaiserlowe/portfolio/bg_qhx21i.webp"
        display={{ xs: "block", lg: "none" }}
      >
        <MobilePortfolio content={portfolio} header btn />
      </BG>
      <Team />
    </Layout>
  );
};

export default Home;
