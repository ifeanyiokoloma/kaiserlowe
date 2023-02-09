import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./component/Loading";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Suspense
      fallback={
        <Loading />
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
