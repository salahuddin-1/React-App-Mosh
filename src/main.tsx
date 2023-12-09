import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Uncomment the following line to use bootstrap
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
