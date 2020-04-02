import React from "react";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  // itemCount: cartItems.reduce(
  //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  //   0
  // )
  // we replace with selectorCart because we create custom for this
  itemCount: selectCartItemsCount(state)
});

/** cartItems.reduce(())   is a native array method in JavaScript */
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
