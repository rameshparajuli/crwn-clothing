import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
// ReactComponent is a special syntax in React for importing SVG. Next lesson will explain how this works
import "./header.styles.scss";
import { auth } from "../../API/firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    {console.log("props on header", currentUser)}
    <Link to="/" className="logo-contain">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
// mapStateToProps naming can be anything but mapStateToProps is standard with redux codebases
export default connect(mapStateToProps)(Header);
