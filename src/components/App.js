import React, { Component } from 'react';

import Header from './Header';
import ColorPicker from './ColorPicker';
import GradientPicker from './GradientPicker';

class App extends Component {
	constructor() {
		super();		
	}

	state = {
		gradients: [
			{gradone: true}
		],
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
