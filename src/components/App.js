import React, { Component } from 'react';
import update from 'immutability-helper';

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
		this.updateFallback = this.updateFallback.bind(this);
	}

	state = {
		gradients: colorData,
		currentGradients: colorData,
		notifications: [],
		tags: [ "all", "red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink", "grey", "brown"],
		filter: "all",
		favoriteCount: 0,
		prefixOn: false,
		fallbackOn: false,
	}

	addNotification = (notification) => {
		const notifications = [...this.state.notifications, notification];
		this.setState({ notifications });
		setTimeout(() => {
			this.cleanNotifications()
		}, 3000);
	}

	cleanNotifications = () => {
		const notifications = this.state.notifications.slice(1);
		this.setState({ notifications });
	}

	filterGradients = (filter) => {
		this.setState({filter});
	}

	showFavorites = () => {
		if(this.state.favoriteCount !== 0) {
			this.setState({filter: "faved"});
		} else {
			this.addNotification( createNoFaveNotification() );
		}
	}

	addToFavorites = (index, e) => {
		e.stopPropagation();
		const value = this.state.currentGradients[index].tags.faved;
		const name = this.state.currentGradients[index].name
		let favoriteCount = this.state.favoriteCount;
		value ? favoriteCount-- : favoriteCount++;
		const currentGradients = update(this.state.currentGradients, {
			[index]: {
				tags: {
					faved: {$set: !value}
				}
			}
		});

		this.addNotification(createFaveNotification(name, value));

		this.setState({ 
			currentGradients,
			favoriteCount
		 });
	}

	updatePrefix() {
		this.setState({ prefixOn: !this.state.prefixOn });
	}

	updateFallback() {
		this.setState({ fallbackOn: !this.state.fallbackOn });	
	}

	// componentWillMount() {
	// 	const localStorageGradients = localStorage.getItem('currentGradients');
	// 	const localStorageFavorites = localStorage.getItem('favoriteCount');

	// 	if(localStorageGradients || localStorageFavorites) {
	// 		this.setState({
	// 			currentGradients: JSON.parse(localStorageGradients),
	// 			favoriteCount: JSON.parse(localStorageFavorites)
	// 		});
	// 	}
	// }

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('currentGradients', JSON.stringify(nextState.currentGradients));
		localStorage.setItem('favoriteCount', JSON.stringify(nextState.favoriteCount));
	}

	render() {
		return (
			<div className="app">
				<Header 
					updatePrefix={this.updatePrefix}
					updateFallback={this.updateFallback}
					prefixOn={this.state.prefixOn}
					fallbackOn={this.state.fallbackOn}
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
							filter={this.state.filter}
							addNotification={this.addNotification}
							addToFavorites={this.addToFavorites}
							prefixOn={this.state.prefixOn}
							fallbackOn={this.state.fallbackOn}
						/>
					</main>
			</div>
		);
	}
}

export default App;
