import React, {Component} from "react";
import WelcomeScreen from "./../WelcomeScreen/WelcomeScreen.jsx";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    const onTitleClick = function (event) {
      event.preventDefault();
    };

    return (
      <WelcomeScreen
        onTitleClick={onTitleClick}
      />
    );
  }
}


App.propTypes = {
  onTitleClick: PropTypes.func
};
