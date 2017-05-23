// import React, { Component } from "react";
import React from "react";
import "./App.css";
import HelloWorldPage from "./Components/HelloWorldPage/HelloWorldPage";
import TestRouteComponent from "./Components/TestRouteComponent/TestRouteComponent";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
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
