import React from "react";
import EmbedMap from "./EmbedMap";
import StoreList from "./StoreList";

function StoreLocator(props) {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:w-full w-3/4 mx-auto">
          <StoreList locations={props.locations} />
        </div>
        <div className="lg:col-span-2">
          <EmbedMap src={props.src} />
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
