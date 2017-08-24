import React, { Component } from 'react';

import Header from './Header';
import ColorPicker from './ColorPicker';
import GradientPicker from './GradientPicker';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
					<div className="body">
						<ColorPicker />
						<GradientPicker />
					</div>
			</div>
		);
	}
}

export default App;
