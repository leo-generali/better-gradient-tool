import React, { Component } from 'react';

import FavedStar from './FavedStar';

class GradientCardBack extends Component {
	render() {
		return(
			<div className="gradient-card__back gradient-card__side">
				<p className="gradient-card__color">Test</p>
				<div className="gradient-card__info">
				<p className="gradient-card__name">{this.props.name}</p>
					<div className="gradient-card__options">
						<FavedStar 
							addToFavorites={ this.props.addToFavorites }
							index={this.props.index}
							status={this.props.faved}
						/>
						<p 
							className="flip-button"
							onClick={this.props.flip}>
							↻
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default GradientCardBack;