import React, { Component } from 'react';

import ColorSwatchColor from './ColorSwatchColor';

class ColorSwatch extends Component {
	render() {
		const colors = this.props.colors
			.map((color, i) => (
				<ColorSwatchColor
					color={color}
					key={i}
				/>)
			);

		return (
			<div className="color-swatch">
				<h1 className="color-swatch-title">Color Swatch</h1>
				<div className="color-swatch-colors">
				{colors}
				</div>
			</div>
		)
	}
}

export default ColorSwatch;