import React from "react";
import Button from "components/button";

const Orders = (props) => {
  return (
    <div className="orders">
      <div className="orders__list">
        <span>{props.data.date}</span>
        <span>{props.data.type}</span>
        <Button onClick={props.onClick} />
      </div>
    </div>
  );
};

export default Orders;
