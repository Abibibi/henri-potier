// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import HomeProduct from '../../components/HomeProduct';

// Action Creators
import { productsInCart } from '../../store/reducer';


const mapStateToProps = (state, ownProps) => ({
  homeProducts: state.homeProducts,
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  cartChanges: (products) => {
    dispatch(productsInCart(products));
  },
});

// Container
const HomeProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeProduct);

// == Export
export default HomeProductContainer;
