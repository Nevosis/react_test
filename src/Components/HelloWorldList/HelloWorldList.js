import React, { Component } from "react";
import Loader from "react-loader";
import HelloWorld from "../HelloWorld/HelloWorld";
import userDao from "../../dao/user.dao";
import log from "../../utils/log";
import "./HelloWorldList.css";

class HelloWorldList extends Component {
	constructor(props) {
		super(props);
		log.info("[HelloWorldList]constructor");

		this.state = {
			loaded: false,
			greetings: []
		};

		// Child - addGreeting
		this.addGreeting = this.addGreeting.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
	}
	componentDidMount() {
		log.info("[HelloWorldList]componentDidMount");

		// Fake Call db to test async and loader
		userDao.getUsers().then((users) => {
			this.setState({
				loaded: true,
				greetings: users
			});
			if (this.props.loaded) this.props.loaded();
		});
	}
	addGreeting(newName) {
		this.setState({ greetings: [...this.state.greetings, newName] });
	}
	removeGreeting(removeName) {
		const filteredGreetings = this.state.greetings.filter(name => {
			return name !== removeName;
		});
		this.setState({ greetings: filteredGreetings });
	}
	renderGreetings() {
		return this.state.greetings.map((name, index) => (
			<HelloWorld
				// key = name rend les noms unique. Possibilité de mettre index, mais doit etre passé a Helloworld en prop pour remonter la destruction (lourd et pas propre). Besoin d'un ID
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
