import React, { Component } from 'react';

import ColorSwatchColor from './ColorSwatchColor';

class ColorSwatch extends Component {
	render() {
		const colors = this.props.colors
			.map((color, i) => (
				<ColorSwatchColor
					color={color}
					key={i}
					addNotification={this.props.addNotification}
				/>)
			);

		return (
			<div className="color-swatch">
				<h1 className="color-swatch-title">Palette</h1>
				<div className="color-swatch-colors">
				{colors}
				</div>
			</div>
		)
	}
}

export default ColorSwatch;