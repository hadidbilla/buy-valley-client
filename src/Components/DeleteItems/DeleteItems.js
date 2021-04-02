import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";

const DeleteItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const handleDeleteItem = (id) => {
    console.log(id);
    fetch(`http://localhost:4500/deleteItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data, " Delete Successfully"));
  };
  return (
    <div className="container">
      <Header />
      <div className="card mb-4 mt-5">
        <div class="card-body d-flex justify-content-around ">
          <h5 class="card-title">Name</h5>
          <h4 class="card-title">price</h4>
          <h4 class="card-title">Action</h4>
        </div>
      </div>
      {items.map((item) => (
        <div className="card mb-4">
          <div class="card-body d-flex justify-content-around ">
            <h6 class="card-title">{item.name}</h6>
            <h4>৳{item.price}</h4>
            <button
              onClick={() => handleDeleteItem(item._id)}
              style={{ border: "0px", backgroundColor: "white" }}
            >
              <FontAwesomeIcon style={{ color: "red" }} icon={faBackspace} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteItems;
