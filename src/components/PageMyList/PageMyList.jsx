import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import {Operation as OperationData} from './../../reducer/data/data';
import {getFavorite} from './../../reducer/favorite/selectors';
import CatalogMovieList from './../../components/CatalogMovieList/CatalogMovieList.jsx';

class PageMyList extends PureComponent {
  componentDidMount() {
    this.props.loadFavorite();
  }

  render() {
    return (
      <div className="user-page">
        <Header headerTitle={`My list`} withAuth/>
        <CatalogMovieList filmsList={this.props.favorite}/>
        <Footer/>
      </div>);
  }
}

PageMyList.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favorite: getFavorite(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorite: () => dispatch(OperationData.loadFavorite())
});

export {PageMyList};
export default connect(mapStateToProps, mapDispatchToProps)(PageMyList);
