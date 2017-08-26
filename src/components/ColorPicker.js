import React, { Component } from 'react';
import ColorPickerCard from './ColorPickerCard';
import Favorites from './Favorites';

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
				<Favorites showFavorites={this.props.showFavorites}/>
				{ tags }
			</section>
		);
	}
}

export default ColorPicker;