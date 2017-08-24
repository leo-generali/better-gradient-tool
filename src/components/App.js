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
	}

	state = {
		gradients: colorData,
		currentgradients: [],
		tags: []
	}

	render() {
		return (
			<div className="app">
				<Header />
					<div className="body">
						<ColorPicker />
						<GradientPicker 
							gradients={this.state.gradients}
							currentgradients={this.state.currentgradients}
						/>
					</div>
			</div>
		);
	}
}

export default App;
