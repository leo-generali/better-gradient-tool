import React, { Component } from 'react';

import GradientCardFront from './GradientCardFront';
import GradientCardBack from './GradientCardBack';

class GradientCard extends Component {
	state = { 
		flipped: false,
		hovered: false
	};

	flip = () => {
		this.setState({ flipped: !this.state.flipped });
	};

	handleHover = () => {
		this.setState({
			hovered: !this.state.hovered
		});
	}

	className(classes) {
		let myClassName = 'gradient-card';
		if (classes.flipped) myClassName += ' gradient-card--flipped';
		if (classes.hovered) myClassName += ' gradient-card--hovered';
		return myClassName;
	}

	render() {

		const myClassName = this.className(this.state);

		if(!this.props.showing) {
			return null;
		}
		

		return(
			<div ref={this.props.name} className={ myClassName } >
				<GradientCardFront 
					name={this.props.name}
					faved={this.props.faved}
					style={this.props.styleInfo}
					togglePopup={this.togglePopup}
					index={this.props.index}
					flip={this.flip}
					colors={this.props.colors}
					handleHover={this.handleHover}
					addNotification={this.props.addNotification}
					addToFavorites={this.props.addToFavorites}
					prefixOn={this.props.prefixOn}
					fallbackOn={this.props.fallbackOn}
				/>
				<GradientCardBack 
					name={this.props.name}
					faved={this.props.faved}
					index={this.props.index}
					colors={this.props.colors}
					flip={this.flip}
					addNotification={this.props.addNotification}
					addToFavorites={this.props.addToFavorites}
				/>
			</div>
		);
	}
}

export default GradientCard;