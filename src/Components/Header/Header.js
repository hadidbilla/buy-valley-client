import React from "react";
import "./Header.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Buy-Valley
        </Link>
        <ul class="navbar-nav mb-lg-0 d-flex flex-row">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/order">
              Orders
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/admin">
              Admin
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/details">
              Details
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
