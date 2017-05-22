import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

//Render App from App.js insidne root
ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById("root")
);

registerServiceWorker();
