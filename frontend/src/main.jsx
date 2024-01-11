import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import Modal from "react-modal";

// Set the 'appElement' property to the 'root' element.
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
