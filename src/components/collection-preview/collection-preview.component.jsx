import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import "./collection-preview.styles.scss";
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .map(item => <CollectionItem key={item.id} item={item} />)
        .filter((item, idx) => idx < 4)}
    </div>
  </div>
);

export default CollectionPreview;
