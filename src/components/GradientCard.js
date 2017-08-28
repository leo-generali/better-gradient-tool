import React, { Component } from 'react';

import GradientCardFront from './GradientCardFront';

class GradientCard extends Component {
	state = { 
		flipped: false
	};

	flip = () => {
		this.setState({ flipped: !this.state.flipped });
	}

	render() {
		const style = {
			background: this.props.styleInfo
		};

		const name = this.props.name;
		const faved = this.props.faved;

		return(
			<div ref={name} className="gradient-card" >
				<GradientCardFront 
					name={this.props.name}
					faved={this.props.faved}
					style={this.props.styleInfo}
					togglePopup={this.togglePopup}
					index={this.props.index}
					addToFavorites={this.props.addToFavorites}
				/>
			</div>
		);
	}
}

export default GradientCard;