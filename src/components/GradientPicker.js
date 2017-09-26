import React, { Component } from 'react';
import GradientCard from './GradientCard';

class GradientPicker extends Component {

	isFiltered (filter, gradient) {
		if(filter !== "favorites") {
			return filter === "all" ? gradient.tags : gradient.tags[filter];
		} else {

		}
	}

	render() {
		const filter = this.props.filter;

		// Only show the gradients that are supposed to be seen
		const gradients = this.props.currentGradients
			.map((gradient, i) => (
				<GradientCard
					styleInfo={gradient.style} 
					name={gradient.name} 
					colors={gradient.colors}
					faved={gradient.tags.faved}
					tags={gradient.tags}
					showing={this.isFiltered(filter, gradient)}
					addNotification={this.props.addNotification}
					addToFavorites={this.props.addToFavorites}
					prefixOn={this.props.prefixOn}
					fallbackOn={this.props.fallbackOn}
					key={i} 
					index={i}
				/>)
			);

		return(
			<div className="gradientpicker-container">
				<main className="gradientpicker">
					{ gradients	}
				</main>
			</div>
		);
	}
}

export default GradientPicker;