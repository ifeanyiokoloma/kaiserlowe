import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import TrainingPage from "../pages/Training";
import { training } from "../asset/content";
import Course from "../pages/Course";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />,
      <Route path="about" element={<About />} />,
      <Route path="services" element={<Services />} />,
      <Route path="training" element={<TrainingPage />} />,
      {training.map((course) => {
        let {link, h2, img, content} = course;
        return <Route key={link} path={`${link}`} element={<Course h1={h2} img={img} article={content} />}  />;
      })}
      ,
      <Route path="portfolio" element={<Portfolio />} />,
      <Route path="contact" element={<Contact />} />
    </>
  )
);
