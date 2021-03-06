import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Items from "../Items/Items";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-harbor-97669.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      <Header />
      {items.length === 0 && (
        <div class="text-center mt-5 text-success">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      )}
      <div className="row d-flex justify-content-center">
        {items.map((item) => (
          <Items item={item}></Items>
        ))}
      </div>
    </div>
  );
};

export default Home;
