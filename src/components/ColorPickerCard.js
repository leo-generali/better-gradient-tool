import React, { Component } from 'react';

class ColorPickerCard extends Component {
	render() {
		
		const tag = this.props.tag;

		return(
			<div className={`card tag tag--${tag}`}></div>
		);
	}
}

export default ColorPickerCard;