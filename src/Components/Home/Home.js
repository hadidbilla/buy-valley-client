import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Items from "../Items/Items";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row d-flex justify-content-center">
        {items.map((item) => (
          <Items item={item}></Items>
        ))}
      </div>
    </div>
  );
};

export default Home;
