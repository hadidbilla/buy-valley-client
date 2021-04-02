import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const Checkout = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [items, setItems] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  const [order, setOrder] = useState({
    email: "",
    name: "",
    date: "",
    itemName: "",
    price: "",
    pic: "",
  });
  useEffect(() => {
    fetch("https://enigmatic-harbor-97669.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  useEffect(() => {
    fetch(`https://enigmatic-harbor-97669.herokuapp.com/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedItem(data));
  }, [id]);
  const handleCheckout = () => {
    let currentDate = new Date();
    const dateTime =
      currentDate.getDay() +
      "/" +
      currentDate.getMonth() +
      "/" +
      currentDate.getFullYear() +
      " @ " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    const orderDetails = { ...loggedInUser, ...selectedItem, date: dateTime };
    setOrder(orderDetails);
  };
  if (order.email) {
    fetch("https://enigmatic-harbor-97669.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    history.push("/order");
  }
  return (
    <div className="container">
      <Header />
      <div className="card mt-5 mb-4">
        <div class="card-body d-flex justify-content-around ">
          <h5 class="card-title">Name</h5>
          <h4 class="card-title">Quantity</h4>
          <h4 class="card-title">Price</h4>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body d-flex justify-content-around">
          <h6 class="card-title">{selectedItem.name}</h6>
          <h4>1</h4>
          <h4>৳{selectedItem.price}</h4>
        </div>
      </div>
      <button className="glow-on-hover" onClick={handleCheckout}>
        CheckOut
      </button>
    </div>
  );
};

export default Checkout;
