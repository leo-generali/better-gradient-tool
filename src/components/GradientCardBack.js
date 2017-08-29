import React, { Component } from 'react';

import FavedStar from './FavedStar';
import ColorSwatch from './ColorSwatch';

class GradientCardBack extends Component {
	render() {
		return(
			<div className="gradient-card__back gradient-card__side">
				<ColorSwatch colors={this.props.colors}/>
				<div className="gradient-card__info">
				<p className="gradient-card__name">{this.props.name}</p>
					<div className="gradient-card__options">
						<p 
							className="flip-button"
							onClick={this.props.flip}>
							↻
						</p>
						<FavedStar 
							addToFavorites={ this.props.addToFavorites }
							index={this.props.index}
							status={this.props.faved}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default GradientCardBack;