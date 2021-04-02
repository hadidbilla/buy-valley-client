import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import SingleOrder from "./SingleOrder";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch(
      "https://enigmatic-harbor-97669.herokuapp.com/order?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="mt-5 mb-5">
        <h3 style={{ color: "white" }} className="card-title">
          {loggedInUser.name} Order List
        </h3>
        {orderData.length ? (
          orderData.map((data) => <SingleOrder orderData={data}></SingleOrder>)
        ) : (
          <h3 style={{ color: "wheat" }} className="text-center mt-5">
            {loggedInUser.name} you have no Order yet !
          </h3>
        )}
      </div>
    </div>
  );
};

export default Order;
