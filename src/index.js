import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import {filmsList} from "./components/mocks/films";

ReactDOM.render(<App films={filmsList} />, document.getElementById(`root`));
