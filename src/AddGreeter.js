import React, { Component } from "react";
import "./AddGreeter.css";

class AddGreeter extends Component {
	constructor(props) {
		super(props);
		this.state = { greetingName: "" };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}

	handleUpdate(e) {
		this.setState({ greetingName: e.target.value });
	}

	addGreeting() {
		this.props.addGreeting(this.state.greetingName);
		this.setState({ greetingName: "" });
	}

	render() {
		return (
			<div className="AddGreeter">
				<input
					type="text"
					onChange={this.handleUpdate}
					value={this.state.greetingName}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addGreeting}>+++</button>
			</div>
		);
	}
}

export default AddGreeter;
