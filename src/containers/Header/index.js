// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from '../../components/Header';

import { searchInputChanged } from '../../store/reducer';

const mapStateToProps = (state, ownProps) => ({
  search: state.search,
  homeProducts: state.homeProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchInputModified: (value) => {
    dispatch(searchInputChanged(value));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
