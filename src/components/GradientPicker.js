import React, { Component } from 'react';
import GradientCard from './GradientCard';

class GradientPicker extends Component {
	render() {
		const filter = this.props.filter;

		// Only show the gradients that are supposed to be seen
		const gradients = this.props.currentGradients
			.map((gradient, i) => (
				<GradientCard
					styleInfo={gradient.style} 
					name={gradient.name} 
					colors={gradient.colors}
					faved={gradient.faved}
					tags={gradient.tags}
					showing={filter === "all" ? gradient.tags : gradient.tags[filter]}
					addNotification={this.props.addNotification}
					addToFavorites={this.props.addToFavorites}
					prefixOn={this.props.prefixOn}
					key={i} 
					index={i}
				/>)
			);

		return(
			<main className="gradientpicker">
				{ gradients	}
			</main>
		);
	}
}

export default GradientPicker;