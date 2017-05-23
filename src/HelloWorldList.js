import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import AddGreeter from "./AddGreeter";
import Log from "./utils/log";
import "./HelloWorldList.css";
import Loader from "react-loader";

class HelloWorldList extends Component {
	constructor(props) {
		super(props);
		Log.info("[HelloWorldList]constructor");

		this.state = {
			loaded: false,
			greetings: []
		};

		// Child - addGreeting
		this.addGreeting = this.addGreeting.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}
	componentDidMount() {
		Log.info("[HelloWorldList]componentDidMount");

		// Fake Call db to test async and loader
		setTimeout(
			function() {
				this.setState({
					loaded: true,
					greetings: ["Jim", "Sally", "Bob"]
				});
			}.bind(this),
			1000
		);
	}
	addGreeting(newName) {
		if (this.state.loaded) {
			this.setState({ greetings: [...this.state.greetings, newName] });
			return true;
		} else {
			return false;
		}
	}
	removeGreeting(removeName) {
		// Recup un array SANS l'élément a remove
		const filteredGreetings = this.state.greetings.filter(name => {
			return name !== removeName;
		});
		this.setState({ greetings: filteredGreetings });
	}
	renderGreetings() {
		return this.state.greetings.map(name => (
			<HelloWorld
				key={name}
				name={name}
				removeGreeting={this.removeGreeting}
			/>
		));
	}
	render() {
		return (
			<Loader loaded={this.state.loaded}>
				<div className="HelloWorldList">
					{this.renderGreetings()}
				</div>
			</Loader>
		);
	}
}
export default HelloWorldList;
