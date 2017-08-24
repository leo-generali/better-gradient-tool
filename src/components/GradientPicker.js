import React, { Component } from 'react';
import GradientCard from './GradientCard';

class GradientPicker extends Component {
	render() {

		// Only show the gradients that are supposed to be seen
		const gradients = this.props.currentGradients
			.filter(gradient => gradient.display)
			.map((gradient, i) => (
				<GradientCard styleInfo={gradient.style} key={i} />)
			);

		return(
			<main className="gradientpicker">
				{ gradients	}
			</main>
		);
	}
}

export default GradientPicker;