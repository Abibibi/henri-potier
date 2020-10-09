// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ProductButton from '../../components/ProductButton';

// Action Creators
import { productsInCart } from '../../store/reducer';


const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  homeProducts: state.homeProducts,
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  cartChanges: (products) => {
    dispatch(productsInCart(products));
  },
});

// Container
const ProductButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductButton);

// == Export
export default ProductButtonContainer;
