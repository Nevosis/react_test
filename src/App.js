// import React, { Component } from "react";
import React from "react";
import "./App.css";
import HelloWorldPage from "./HelloWorldPage";
import TestRouteComponent from "./TestRouteComponent";
import HeaderNavBar from "./HeaderNavBar";
import "react-router";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HeaderNavBar />
      <Switch>
        <Route exact path="/" component={HelloWorldPage} />
        <Route path="/test" component={TestRouteComponent} />
      </Switch>
    </div>
  );
};

export default App;
