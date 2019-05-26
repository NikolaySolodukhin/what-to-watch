import React, {Component} from "react";
import {WelcomeScreen} from "./../WelcomeScreen/WelcomeScreen.jsx";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    const {films} = this.props;

    const onTitleClick = function (event) {
      event.preventDefault();
    };

    return (
      <WelcomeScreen
        films={films}
        onTitleClick={onTitleClick}
      />
    );
  }
}


App.propTypes = {
  films: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func
};
