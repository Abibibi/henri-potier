// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Cart from '../../pages/Cart';

// Action Creators


const mapStateToProps = (state, ownProps) => ({
  homeProducts: state.homeProducts,
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

// == Export
export default CartContainer;
