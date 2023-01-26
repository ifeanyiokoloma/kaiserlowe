import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import i18n (needs to be bundled ;))
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </StrictMode>
);
