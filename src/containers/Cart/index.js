// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Cart from '../../pages/Cart';

// Action Creators
import { cartISBNSSaved } from '../../store/reducer';


const mapStateToProps = (state, ownProps) => ({
  homeProducts: state.homeProducts,
  cartProducts: state.cartProducts,
  cartISBNS: state.cartISBNS,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  cartISBNSCollected: (isbns) => {
    dispatch(cartISBNSSaved(isbns));
  },
});

// Container
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

// == Export
export default CartContainer;
