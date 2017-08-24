import React, { Component } from 'react';
import GradientCard from './GradientCard';

class GradientPicker extends Component {
	render() {

		const gradients = this.props.gradients
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