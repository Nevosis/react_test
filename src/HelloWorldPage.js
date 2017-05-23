import React, { Component } from "react";
import HelloWorldList from "./HelloWorldList";
import AddGreeter from "./AddGreeter";
import Log from "./utils/log";
import "./loading.css";

class HelloWorldPage extends Component {
	constructor(props) {
		super(props);
		Log.info("[HelloWorldPage] Constructor");
		this.state = {loading : true};
		this.addGreeting = this.addGreeting.bind(this);
	}

	addGreeting(newName) {
		this.refs.HelloWorldListInstance.addGreeting(newName);
	}
	render() {
		return (
			<div className="HelloWorldPage">
			
					<AddGreeter addGreeting={this.addGreeting} />
					<HelloWorldList
						loaded={this.listLoaded}
						ref="HelloWorldListInstance"
					/>
			</div>
		);
	}
}
export default HelloWorldPage;
