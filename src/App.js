import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";
import Order from "./Components/Order/Order";
import Admin from "./Components/Admin/Admin";
import AddProducts from "./Components/AddProducts/AddProducts";
import DeleteItems from "./Components/DeleteItems/DeleteItems";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          y
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageProduct">
            <DeleteItems />
          </Route>
          <Route path="/addProduct">
            <AddProducts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
