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

const Home = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SlidingHero />
      <About />
      <BG>
        <Training
          extraBtn
          headerColor="white"
          headerLineColor="var(--primary)"
          header={t("Training")}
        />
      </BG>
      <Services />
      <Portfolio />
      <MobilePortfolio />
      <Team />
    </Layout>
  );
};

export default Home;
