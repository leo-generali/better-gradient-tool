import React, { Component } from 'react';
import ColorPickerCard from './ColorPickerCard';

class ColorPicker extends Component {
	render() {

		const that = this;
		const tags = this.props.tags.map(function (tag, i) {
			return (
				<ColorPickerCard
					filterGradients={that.props.filterGradients} 
					tag={tag} 
					key={i}
				/>
			) 
		});

		return(
			<section className="colorpicker">
				{ tags }
			</section>
		);
	}
}

export default ColorPicker;