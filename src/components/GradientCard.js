import React, { Component } from 'react';

import GradientCardFront from './GradientCardFront';
import GradientCardBack from './GradientCardBack';

class GradientCard extends Component {
	state = { 
		flipped: false
	};

	flip = () => {
		this.setState({ flipped: !this.state.flipped });
	}

	render() {
		const name = this.props.name;

		return(
			<div ref={name} className={this.state.flipped ? "gradient-card gradient-card--flipped" : "gradient-card"} >
				<GradientCardFront 
					name={this.props.name}
					faved={this.props.faved}
					style={this.props.styleInfo}
					togglePopup={this.togglePopup}
					index={this.props.index}
					flip={this.flip}
					addToFavorites={this.props.addToFavorites}
				/>
				<GradientCardBack 
					name={this.props.name}
					faved={this.props.faved}
					index={this.props.index}
					colors={this.props.colors}
					flip={this.flip}
					addToFavorites={this.props.addToFavorites}
				/>
			</div>
		);
	}
}

export default GradientCard;