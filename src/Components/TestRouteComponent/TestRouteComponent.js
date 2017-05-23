import React, { Component } from "react";
import HelloWorldList from "../HelloWorldList/HelloWorldList";
import log from "../../utils/log";

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
