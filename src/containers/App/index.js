// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../../components/App';

// Action Creators
import { homeProductsSought } from '../../store/reducer';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  homeProductsCalled: () => {
    dispatch(homeProductsSought());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
