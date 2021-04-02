import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Admin.css";

function Admin() {
  return (
    <div className="main-section d-flex">
      <div className="left-bar">
        <ul>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/manageProduct"
            >
              Manage Product
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              className="link"
              style={{ textDecoration: "none" }}
              to="/addProduct"
            >
              Add product
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-bar d-flex justify-content-center">
        <div className="">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default Admin;
