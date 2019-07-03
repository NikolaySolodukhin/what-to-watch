import React from 'react';
import {Switch, Route} from 'react-router-dom';

import WelcomeScreen from './../WelcomeScreen/WelcomeScreen.jsx';
import {PageSignIn} from './../PageSignIn/PageSignIn.jsx';
import PageMyList from './../PageMyList/PageMyList.jsx';
import WithAuthRoute from './../hocs/WithAuthRoute/WithAuthRoute.jsx';
import PageFilm from './../PageFilm/PageFilm.jsx';
import WithOutAuthRoute from './../hocs/WithOutAuthRoute/WithOutAuthRoute.jsx';
import PageFilmReview from './../PageFilmReview/PageFilmReview.jsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeScreen}/>
      <Route exact path="/film/:id/review" component={PageFilmReview}/>
      <Route path="/film/:id" component={PageFilm}/>
      <WithAuthRoute path="/my-list" component={PageMyList}/>
      <WithOutAuthRoute exact path="/login" component={PageSignIn}/>
    </Switch>
  );
}

export {App};
