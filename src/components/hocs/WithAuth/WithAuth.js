import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import PageSignIn from './../../../components/PageSignIn/PageSignIn.jsx';
import {getUserIsLoggedIn} from './../../../reducer/user/selectors';

function WithAuth(props) {
  if (!props.isLoggedIn) {
    return <PageSignIn/>;
  }


  return <Fragment>{props.children}</Fragment>;
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isLoggedIn: getUserIsLoggedIn(state),
});

export default connect(mapStateToProps)(WithAuth);
