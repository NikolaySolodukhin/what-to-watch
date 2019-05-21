import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/App/App.jsx";
export const FILMS_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(<App films={FILMS_LIST} />, document.getElementById(`root`));
