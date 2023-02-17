import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Services from "../pages/Services";
import Training from "../pages/Training";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "training",
    element: <Training />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
