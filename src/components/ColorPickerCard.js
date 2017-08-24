import React, { Component } from 'react';

class ColorPickerCard extends Component {

	render() {	
		const tag = this.props.tag;

		return(
			<div onClick={() => this.props.filterGradients(tag)} className={`card tag tag--${tag}`}>
			</div>
		);
	}
}

export default ColorPickerCard;