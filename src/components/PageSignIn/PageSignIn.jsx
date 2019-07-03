import React from "react";

import Header from "./../../components/Header/Header.jsx";
import Footer from "./../../components/Footer/Footer.jsx";
import SignIn from "./../../components/SignIn/SignIn.jsx";

function PageSignIn() {
  return (
    <div className="user-page">
      <Header headerTitle={`Sign in`} />
      <SignIn />
      <Footer />
    </div>
  );
}

export {PageSignIn};
