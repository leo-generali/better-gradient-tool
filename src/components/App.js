import React, { Component } from 'react';

import Header from './Header';
import ColorPicker from './ColorPicker';
import GradientPicker from './GradientPicker';

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
	}

	state = {
		gradients: colorData,
		currentGradients: colorData,
		savedGradients: {},
		tags: [ "all", "blue", "red", "purple", "orange"]
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
		console.log("your faves")
		const currentGradients = this.state.gradients
			.filter(function(gradient) {
				return gradient.faved;
			});
		currentGradients.length ? this.setState({ currentGradients }) : this.setState({ currentGradients: this.state.gradients });
	}

	render() {
		return (
			<div className="app">
				<Header />
					<div className="body">
						<ColorPicker 
							tags={this.state.tags}
							filterGradients={this.filterGradients}
							showFavorites={this.showFavorites}
						/>
						<GradientPicker 
							gradients={this.state.gradients}
							currentGradients={this.state.currentGradients}
						/>
					</div>
			</div>
		);
	}
}

export default App;
