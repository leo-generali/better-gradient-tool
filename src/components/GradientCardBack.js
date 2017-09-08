import React, { Component } from 'react';

import FavedStar from './FavedStar';
import ColorSwatch from './ColorSwatch';

import flipicon from '../img/flip.svg'; 

class GradientCardBack extends Component {
	render() {
		return(
			<div className="gradient-card__back gradient-card__side">
				<ColorSwatch 
					colors={this.props.colors}
					addNotification={this.props.addNotification}
				/>
				<div className="gradient-card__info">
				<p className="gradient-card__name">{this.props.name}</p>
					<div className="gradient-card__options">
						<FavedStar 
							addToFavorites={ this.props.addToFavorites }
							index={this.props.index}
							status={this.props.faved}
						/>
						<img 
							src={flipicon} 
							className="flip-button--flipped"
							onClick={this.props.flip} 
							alt="Flip card!"/>
					</div>
				</div>
			</div>
		);
	}
}

export default GradientCardBack;