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
    fetch("http://localhost:4500/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4500/checkout/${id}`)
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
    fetch("http://localhost:4500/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    history.push("/order");
  }
  return (
    <div className="container">
      <Header />
      <h1>{selectedItem.name}</h1>
      <button className="glow-on-hover" onClick={handleCheckout}>
        CheckOut
      </button>
    </div>
  );
};

export default Checkout;
