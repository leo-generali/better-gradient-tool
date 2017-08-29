import React, { Component } from 'react';

import Header from './Header';
import ColorPicker from './ColorPicker';
import GradientPicker from './GradientPicker';
import NotificationsTray from './NotificationsTray';

import { createFaveNotification, createNoFaveNotification } from '../helpers/notifications';

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
		this.updatePrefix = this.updatePrefix.bind(this);
	}

	state = {
		gradients: colorData,
		currentGradients: colorData,
		notifications: [],
		tags: [ "all", "red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink", "grey", "brown"],
		prefixOn: false
	}

	addNotification = (notification) => {
		const notifications = this.state.notifications;
		notifications.push(notification);
		this.setState({ notifications });
		this.cleanNotifications();
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
		console.log(currentGradients.length);
		currentGradients.length ? this.setState({ currentGradients }) : this.addNotification( createNoFaveNotification() ) ;
	}

	addToFavorites = (index, e) => {
		e.stopPropagation();
		const currentGradients = this.state.currentGradients;
		this.addNotification(createFaveNotification(currentGradients[index].name, currentGradients[index].faved));
		currentGradients[index].faved = !currentGradients[index].faved;
		this.setState({ currentGradients });
	}

	updatePrefix() {
		const prefixOn = !this.state.prefixOn;
		this.setState({ prefixOn });
	}

	render() {
		return (
			<div className="app">
				<Header 
					updatePrefix={this.updatePrefix}
					prefixOn={this.state.prefixOn}
				/>
					<main className="body">
						<NotificationsTray 
							notifications={this.state.notifications}
						/>
						<ColorPicker 
							tags={this.state.tags}
							filterGradients={this.filterGradients}
							showFavorites={this.showFavorites}
							addNotification={this.addNotification}
						/>
						<GradientPicker 
							gradients={this.state.gradients}
							currentGradients={this.state.currentGradients}
							notifications={this.state.notifications}
							addNotification={this.addNotification}
							addToFavorites={this.addToFavorites}
							prefixOn={this.state.prefixOn}
						/>
					</main>
			</div>
		);
	}
}

export default App;
