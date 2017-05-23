import React, { Component } from "react";
import log from "./utils/log";
import HelloWorldList from "./HelloWorldList";

class TestRouteComponent extends Component {
  constructor(props) {
    super(props);
    log.info("[TestRouteComponent] Constructor");
  }

  render() {
    return (
      <div className="TestRouteComponent">
        <HelloWorldList loaded={this.listLoaded} />
      </div>
    );
  }
}

export default TestRouteComponent;
