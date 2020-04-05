import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
const ShopPage = () => (
  <div>
    <CollectionsOverview />
  </div>
);

export default ShopPage;

{
  /** old method using setstate
   * 
   * 
   * import SHOP_DATA
    class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
} */
}
