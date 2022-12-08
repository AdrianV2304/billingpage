import Button from "components/button";
import Orders from "components/orders";
import React, { useState } from "react";

const Billing = (props) => {
  const [data, setData] = useState([
    {
      date: "Oct.21, 2021",
      type: "Pro Annual",
    },
    {
      date: "Aug.21, 2021",
      type: "Pro Portfolio",
    },
    {
      date: "July.21, 2021",
      type: "Sponsored Post",
    },
    {
      date: "Jun.21, 2021",
      type: "Sponsored Post",
    },
  ]);

  // const removeLine = () => {
  //   const temp = [...data];
  //   temp.splice(0, 1);
  //   setData(temp);
  // };

  const removeLine = (idx) => {
    const temp = [...data];
    temp.slice(idx, 1);
    setData(temp);
  };

  return (
    <div className="billing">
      <h1>Billing</h1>

      <div className="billing__span">
        <span>Order History</span>
        <p>Manage billing information and view receips</p>
      </div>

      <div className="billing__title">
        <span>Date</span>
        <span>Type</span>
        <span>Receipt</span>
      </div>

      <div className="billing__orders">
        {data.map((order, idx) => {
          return <Orders data={order} onClick={() => removeLine(idx)} />;
        })}
      </div>

      <div className="billing__load">
        <a href=" " target="_blank">
          Load more
        </a>
      </div>

      <div className="billing__span">
        <span>Payment Method</span>
        <p>Manage billing information and view receips</p>
      </div>

      <div className="billing__payment">
        <img src="/images/visa.png" alt="visa" />
        <span>Visa ending in 2255</span>
        <Button />
      </div>
    </div>
  );
};

export default Billing;
