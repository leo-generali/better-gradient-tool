import React, { Component } from 'react';

import Header from './Header';
import ColorPicker from './ColorPicker';
import GradientPicker from './GradientPicker';
import NotificationsTray from './NotificationsTray';

import { createFaveNotification } from '../helpers/notifications';

// /*------------------------------------*\
//	This color data feeds into the app to dynamically create a list of gradients. That
// 	is, the list will continue to grow as more data is added here.
//
//	Submit a pull request if you'd like to contribute and add a gradient. All gradients must
//	have all four properties filled out.
//
//	name -> Give your gradient a snappy name. As long as it's not innapropriate that should be good.
//
// \*------------------------------------*/
import colorData from '../colordata.json'

class App extends Component {
	constructor() {
		super();
		this.filterGradients = this.filterGradients.bind(this);
		this.addToFavorites = this.addToFavorites.bind(this);
		this.showFavorites = this.showFavorites.bind(this);
		this.addNotification = this.addNotification.bind(this);
	}

	state = {
		gradients: colorData,
		currentGradients: colorData,
		notifications: [],
		tags: [ "all", "red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink", "grey", "brown"]
	}

	addNotification = (notification) => {
		const notifications = this.state.notifications;
		notifications.push(notification);
		this.setState({ notifications });
		this.cleanNotifications();
		console.log("have 3 seconds passed?");
	}

	cleanNotifications = () => {
		const that = this;
		const notifications = this.state.notifications;
		setTimeout(function(){
			console.log("yes");
			notifications.shift();
			that.setState({ notifications });
		}, 3000);
	}

	filterGradients = (color) => {
		const currentGradients = this.state.gradients
			.filter(function(gradient) {
				return gradient.tags[color];
			});
		console.log(currentGradients.length);
		//If the filter lenght is zero (no gradients selected) then current gradients is 
		currentGradients.length ? this.setState({ currentGradients }) : this.setState({ currentGradients: this.state.gradients });
	}

	showFavorites = () => {
		const currentGradients = this.state.gradients
			.filter(function(gradient) {
				return gradient.faved;
			});
		currentGradients.length ? this.setState({ currentGradients }) : this.setState({ currentGradients: this.state.gradients });
	}

	addToFavorites = (index, e) => {
		e.stopPropagation();
		const currentGradients = this.state.currentGradients;
		this.addNotification(createFaveNotification(currentGradients[index].name, currentGradients[index].faved));
		currentGradients[index].faved = !currentGradients[index].faved;
		this.setState({ currentGradients });
	}

	render() {
		return (
			<div className="app">
				<Header />
					<main className="body">
						<NotificationsTray 
							notifications={this.state.notifications}
						/>
						<ColorPicker 
							tags={this.state.tags}
							filterGradients={this.filterGradients}
							showFavorites={this.showFavorites}
						/>
						<GradientPicker 
							gradients={this.state.gradients}
							currentGradients={this.state.currentGradients}
							notifications={this.state.notifications}
							addNotification={this.addNotification}
							addToFavorites={this.addToFavorites}
						/>
					</main>
			</div>
		);
	}
}

export default App;
