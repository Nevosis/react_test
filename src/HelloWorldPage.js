import React, { Component } from "react";
import HelloWorldList from "./HelloWorldList";
import AddGreeter from "./AddGreeter";
import log from "./utils/log";

class HelloWorldPage extends Component {
	constructor(props) {
		super(props);
		log.info("[HelloWorldPage] Constructor");
		this.state = { loading: true };
		this.addGreeting = this.addGreeting.bind(this);
		this.loaded = this.loaded.bind(this);

	}

	addGreeting(newName) {
		this.refs.HelloWorldListInstance.addGreeting(newName);
	}
	loaded() {
		this.setState({loading: false});
	}
	render() {
		return (
			<div className="HelloWorldPage">
				<AddGreeter addGreeting={this.addGreeting} disabled={this.state.loading}/>
				<HelloWorldList
					loaded={this.loaded}
					ref="HelloWorldListInstance"
				/>
			</div>
		);
	}
}
export default HelloWorldPage;
