import React from "react";
import {WelcomeScreen} from "./../WelcomeScreen/WelcomeScreen.jsx";

const FILMS_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

export const App = () => {
  return <WelcomeScreen films={FILMS_LIST} />;
};
