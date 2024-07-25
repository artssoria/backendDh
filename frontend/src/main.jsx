import React from "react";
import ReactDOM from "react-dom/client";
import Modal from 'react-modal';
import App from "./App";
import "./assets/css/normalize.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter } from 'react-router-dom';


Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);