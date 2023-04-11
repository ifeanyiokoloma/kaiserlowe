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

import { useTranslation } from "react-i18next";
import { portfolio } from "../asset/content";

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
      <MobilePortfolio />
      <Team />
    </Layout>
  );
};

export default Home;
