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
      <main>
        <About />
        <BG imagename={`/images/bg_${window.innerWidth <= 600 ? 600 : window.innerWidth <= 900 ? 900 : window.innerWidth <= 1200 ? 1200 : window.innerWidth <= 1536 ? 1536 : "full"}.jpg`}>
          <Training
            extraBtn
            headerColor="white"
            headerLineColor="var(--primary)"
            header={t("Training")}
          />
        </BG>
        <Services />
        <BG
          imagename={`/images/bg_${window.innerWidth <= 600 ? 600 : window.innerWidth <= 900 ? 900 : window.innerWidth <= 1200 ? 1200 : window.innerWidth <= 1536 ? 1536 : "full"}.jpg`}
          display={{ xs: "none", lg: "block" }}
        >
          <Portfolio content={portfolio} btn header />
        </BG>
        <BG
          imagename={`/images/bg_${window.innerWidth <= 600 ? 600 : window.innerWidth <= 900 ? 900 : window.innerWidth <= 1200 ? 1200 : window.innerWidth <= 1536 ? 1536 : "full"}.jpg`}
          display={{ xs: "block", lg: "none" }}
        >
          <MobilePortfolio content={portfolio} header btn />
        </BG>
        <Team />
      </main>
    </Layout>
  );
};

export default Home;
