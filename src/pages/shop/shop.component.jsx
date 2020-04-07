import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
const ShopPage = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/:collectionId}`} component={CollectionPage} />
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  );
};

export default ShopPage;
