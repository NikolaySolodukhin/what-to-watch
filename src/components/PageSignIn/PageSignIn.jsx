import React, {Fragment, PureComponent} from 'react';

import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import SignIn from './../../components/SignIn/SignIn.jsx';

class PageSignIn extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="user-page">
          <Header headerTitle={`Sign in`} />
          <SignIn />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default PageSignIn;
