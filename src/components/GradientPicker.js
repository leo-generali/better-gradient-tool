import React, { Component } from 'react';
import Card from './Card';

class GradientPicker extends Component {
	render() {		

		//Initial display of all gradients
		const gradients = this.props.gradients.map(function (gradient, i){
			return <Card styleInfo={gradient.style} key={i} />
		})

		return(
			<main className="gradientpicker">
			{ gradients	}
			</main>
		);
	}
}

export default GradientPicker;