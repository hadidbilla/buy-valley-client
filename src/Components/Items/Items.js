import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Items.css";

const Items = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { name, pic, price, _id } = props.item;
  const history = useHistory();
  const handleAddOrder = (id) => {
    history.push(`/checkout/${id}`);
  };

  return (
    <div className="card col-lg-3 col-md-5 m-2">
      <img src={pic} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <div className="d-flex justify-content-around">
          <h5 class="card-title">{name}</h5>
          <h4>৳{price}</h4>
        </div>
        <button className="glow-on-hover" onClick={() => handleAddOrder(_id)}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Items;
