import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';

import WelcomeScreen from './../WelcomeScreen/WelcomeScreen.jsx';
import PageSignIn from './../PageSignIn/PageSignIn.jsx';
import PageMyList from './../PageMyList/PageMyList.jsx';
import WithAuthRoute from './../hocs/WithAuthRoute/WithAuthRoute.jsx';
import WithOutAuthRoute from './../hocs/WithOutAuthRoute/WithOutAuthRoute.jsx';

export default class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomeScreen}/>
        <WithAuthRoute path="/my-list" component={PageMyList}/>
        <WithOutAuthRoute exact path="/login" component={PageSignIn}/>
      </Switch>
    );
  }
}

