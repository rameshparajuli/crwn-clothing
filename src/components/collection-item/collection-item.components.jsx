import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

/** About Dispatch
 * addItem: is a props to call on main function as props
 *  and item (which is payload item) takes all as properties and pass to actionCreator
 * that's why item => dispatch(addItem(item))
 * addItem is action Creator and pass item as a properties
 * which is going to change on main function
 */

export default connect(null, mapDispatchToProps)(CollectionItem);
