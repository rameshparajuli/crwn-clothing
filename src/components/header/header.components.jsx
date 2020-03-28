import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
// ReactComponent is a special syntax in React for importing SVG. Next lesson will explain how this works
import "./header.styles.scss";

const Header = () => (
  <div className="header">
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
      <Link to="/signin" className="option">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;