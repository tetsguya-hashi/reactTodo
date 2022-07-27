import { StrictMode } from "react";
import ReactDom from "react-dom";
import { App } from './App';
import "./styles.css";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>
  , document.getElementById("root")
);