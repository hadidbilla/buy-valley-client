import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./Admin.css";

function Admin() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
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
          <div className="mt-5">
            <div
              class="card mt-5 d-flex justify-content-center m-auto"
              style={{ width: "18rem" }}
            >
              <div class="card-header">Name: {loggedInUser.name}</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: {loggedInUser.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
