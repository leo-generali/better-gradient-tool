import React, { Component } from 'react';
import ColorPickerCard from './ColorPickerCard';

class ColorPicker extends Component {
	render() {

		const tags = this.props.tags.map(function (tag, i) {
			return <ColorPickerCard tag={tag} key={i}/>
		});

		return(
			<section className="colorpicker">
				{ tags }
			</section>
		);
	}
}

export default ColorPicker;