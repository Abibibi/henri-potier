// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Cart from '../../pages/Cart';

// Action Creators
import { subtotalAndISBNSSaved, offersSought } from '../../store/reducer';


const mapStateToProps = (state, ownProps) => ({
  homeProducts: state.homeProducts,
  cartProducts: state.cartProducts,
  cartISBNS: state.cartISBNS,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  subtotalAndISBNSCollected: (subtotal, isbns) => {
    dispatch(subtotalAndISBNSSaved(subtotal, isbns));
  },
  offersCalled: () => {
    dispatch(offersSought());
  },
});

// Container
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

// == Export
export default CartContainer;
