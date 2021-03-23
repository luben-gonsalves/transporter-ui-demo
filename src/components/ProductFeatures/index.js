import React from "react";
import { SpaceBetween } from "../CommonComponents";
import { FeatureCard } from "./style";

const ProductFeatures = () => {
  const features = [
    "Air Express Shipping",
    "Sea and Air Cargo Shipping",
    "Full-truckload Freight",
  ];

  return (
    <div style={{ margin: "20px 0px" }}>
      <h3 style={{ marginBottom: "40px" }}>Product Features</h3>
      <SpaceBetween>
        {features.map((f, i) => (
          <FeatureCard key={i}>
            <h4>{f}</h4>
            <p>On-demand Delivery</p>
            <p>Same-day/Next-day Delivery</p>
            <p>Time-defined/Slot-based Delivery</p>
            <p>Returns Management</p>
          </FeatureCard>
        ))}
        <iframe
          width="600"
          height="300"
          title="dummyVideo"
          src="https://www.youtube.com/embed/tEV5sXt6pV8"
        ></iframe>
      </SpaceBetween>
    </div>
  );
};

export default ProductFeatures;
