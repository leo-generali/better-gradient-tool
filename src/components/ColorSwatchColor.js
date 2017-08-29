import React, { Component } from 'react';

class ColorSwatchColor extends Component {
	render() {

		const hex = this.props.color;
		const style = {
			backgroundColor: hex,
		};
		
		return(

			<div class="color-swatch-row">
				<div className="color-swatch-color" style={style}></div>
				<p className="color-swatch-color-hex">{hex}</p>
			</div>
		);
	}
}

export default ColorSwatchColor;