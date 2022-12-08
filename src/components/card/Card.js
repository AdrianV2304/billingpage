import Navigation from "components/navigation";
import React from "react";
import Billing from "components/billing";

const Card = () => {
  return (
    <div className="card">
      <Navigation />
      <Billing />
    </div>
  );
};

export default Card;
