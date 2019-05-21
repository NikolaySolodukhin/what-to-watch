import React, {Component} from "react";
import {WelcomeScreen} from "./../WelcomeScreen/WelcomeScreen.jsx";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    const {films} = this.props;

    return (
      <WelcomeScreen
        films={films}
      />
    );
  }
}


App.propTypes = {
  films: PropTypes.array.isRequired
};
