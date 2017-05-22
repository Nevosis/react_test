import React, { Component } from "react";
import "./HelloWorld.css";

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = { greeting: "Hello" };
		this.frenchify = this.frenchify.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}
	frenchify() {
		this.setState({ greeting: "BONSOIIIIIR" });
	}
	removeGreeting() {
		this.props.removeGreeting(this.props.name);
	}

	render() {
		return (
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}!
				<br />
				<button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
				<button className="delete" onClick={this.removeGreeting}>Delete</button>
			</div>
		);
	}
}

export default HelloWorld;
