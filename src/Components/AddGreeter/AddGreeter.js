import React, { Component } from "react";
import userDao from "../../dao/user.dao";
import log from "../../utils/log";
import "./AddGreeter.css";

class AddGreeter extends Component {
	constructor(props) {
		super(props);
		log.info("[AddGreeter] Constructor");
		this.state = { greetingName: "" };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}

	handleUpdate(e) {
		this.setState({ greetingName: e.target.value });
	}

	addGreeting() {
		userDao.addUser(this.state.greetingName).then(() => {
			this.props.addGreeting(this.state.greetingName);
			this.setState({ greetingName: "" });
		});
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
				<button
					onClick={this.addGreeting}
					disabled={this.props.disabled}
				>
					+++
				</button>
			</div>
		);
	}
}

export default AddGreeter;
