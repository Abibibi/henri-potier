// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from '../../pages/Home';

// Action Creators
import { homeProductsSought } from '../../store/reducer';


const mapStateToProps = (state, ownProps) => ({
  homeProducts: state.homeProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  homeProductsCalled: () => {
    dispatch(homeProductsSought());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
