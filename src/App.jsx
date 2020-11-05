import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
