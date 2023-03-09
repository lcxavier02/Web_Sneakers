import React, { useState, useEffect } from "react";
import SneakerCard from "../components/SneakerCard";
import womenSneakerData from "../../../womenSneakerData.json";

function WomenCollections() {
  const [sneaker, setSneaker] = useState([]);

  useEffect(() => {
    setSneaker(womenSneakerData);
  }, []);

  return (
    <div className="mx-auto w-5/6 h-full">
      <h1 className="text-xl my-10">For Women</h1>
      <div className="flex flex-wrap gap-12 mx-auto mb-10 justify-center">
        {sneaker.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            sneakerName={sneaker.name}
            sneakerImage={sneaker.image}
            sneakerPrice={sneaker.price}
            sneakerDescription={sneaker.description}
          />
        ))}
      </div>
    </div>
  );
}

export default WomenCollections;
