import React, { useState } from "react";

const singleOrder = (props) => {
  const { name, pic, price, date } = props.orderData;
  return (
    <div className="card mb-3">
      <div class="card-body d-flex justify-content-around ">
        <h5 class="card-title">{name}</h5>
        <p>{date}</p>
        <h4>৳{price}</h4>
      </div>
    </div>
  );
};

export default singleOrder;
