import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import drawImageOnConsole from "./utils/consoleimg";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

drawImageOnConsole("https://vignette4.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png");

//Render App from App.js insidne root
ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById("root")
);

registerServiceWorker();

