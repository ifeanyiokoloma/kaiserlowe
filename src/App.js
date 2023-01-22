import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Default theme
import "@splidejs/react-splide/css";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Splide
      options={{
        autoplay: true,
        interval: 6000,
        lazyLoad: true,
        keyboard: true,
        height: "100vh",
        width: "100%",
        type: "loop",
        speed: 3000,
        reducedMotion: true,
        cover: true,
      }}
      aria-label="My Favorite Images"
      tag="section"
      className="text-white"
    >
      <SplideSlide>
        <div className="flex-column h-100 w-100 d-flex justify-content-center align-items-center dark-bg">
          <Container className="h-100 flex-column d-flex justify-content-center align-items-center">
            <h1
              style={{ fontWeight: "bold" }}
              className="text-uppercase text-center display-1"
            >
              Coming soon
            </h1>
            <p
              style={{ color: "d3d3d3" }}
              className="tablet-width text-center px-5 lead"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              labore voluptates sapiente molestiae itaque quaerat consequatur
              velit aperiam, quos deserunt?
            </p>
          </Container>
        </div>
        <img
          src="/images/hero/construction-worker.jpg"
          alt="construction worker"
        />
      </SplideSlide>
      <SplideSlide>
        <div className="flex-column h-100 w-100 d-flex justify-content-center align-items-center dark-bg">
          <Container className="h-100 flex-column d-flex justify-content-center align-items-center">
            <h1
              style={{ fontWeight: "bold" }}
              className="text-uppercase text-center display-1"
            >
              Coming soon
            </h1>
            <p
              style={{ color: "d3d3d3" }}
              className="tablet-width text-center px-5 lead"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              labore voluptates sapiente molestiae itaque quaerat consequatur
              velit aperiam, quos deserunt?
            </p>
          </Container>
        </div>
        <img src="/images/hero/complex-road.jpg" alt="complex road" />
      </SplideSlide>
      <SplideSlide>
        <div className="h-100 w-100 dark-bg">
          <Container className="h-100 flex-column d-flex justify-content-center align-items-center">
            <h1
              style={{ fontWeight: "bold" }}
              className="text-uppercase text-center display-1"
            >
              Coming soon
            </h1>
            <p
              style={{ color: "d3d3d3" }}
              className="tablet-width text-center px-5 lead"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              labore voluptates sapiente molestiae itaque quaerat consequatur
              velit aperiam, quos deserunt?
            </p>
          </Container>
        </div>
        <img
          src="/images/hero/two-construction-workers.jpg"
          alt="two construction workers"
        />
      </SplideSlide>
    </Splide>
  );
}

export default App;
