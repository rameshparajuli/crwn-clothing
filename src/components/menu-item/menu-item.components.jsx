import React from "react";
import "./menu-item.styles.scss";
// const MenuItem = props => (
//   <div className="menu-item">
//     {console.log("props on menu item", props)}
//     <div className="content">
//       <h1 className="title">{props.title}</h1>
//       <span className="subtitle">SHOP NOW</span>
//     </div>
//   </div>
// );

// or we can do it by this kind of direct props name method using ({ props_name })

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
