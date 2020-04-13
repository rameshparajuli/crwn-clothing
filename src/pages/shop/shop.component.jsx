import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { updateCollections } from "../../redux/shop/shop.action";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../.././API/firebase/firebase.utils";

const CollectionsOverviewWithSpinner =  WithSpinner(CollectionsOverview);
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPagewWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
