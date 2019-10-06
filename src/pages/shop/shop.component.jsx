import React from "react";

import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/collection-preview/collection-preview.component.jsx";

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
      <div className="shop-page">
        {collections.map(({ id, ...otherColelctionsProps }) => (
          <PreviewCollection key={id} {...otherColelctionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
