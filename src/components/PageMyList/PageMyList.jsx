import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import {getFavorite} from './../../reducer/favorite/selectors';
import CatalogMovieList from './../../components/CatalogMovieList/CatalogMovieList.jsx';

class PageMyList extends PureComponent {
  render() {
    const {favorite} = this.props;
    return (
      <div className="user-page">
        <Header headerTitle={`My list`} withAuth/>
        <CatalogMovieList filmsList={favorite}/>
        <Footer/>
      </div>);
  }
}

PageMyList.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favorite: getFavorite(state)
});

export {PageMyList};
export default connect(mapStateToProps)(PageMyList);
